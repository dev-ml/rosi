import React from "react";
import { formatTimeStamp, dayMinuteToRadian } from "../../../shared/utility";
import "./ClockView.scss";
import { minutesInDay, minutesInHour, oneHour, clockHoursBackwards, clockHoursForward } from "../../../shared/consts";
import Allocation from "../../../models/Allocation";

interface IProps {
  time: number;
  allocations: Allocation[];
}

// [TODO] show overlapping events with different color,
// in general overlapping events should be tested if they work correctly
export const ClockView: React.FC<IProps> = (props: IProps) => {
  const defaultLineWidth = 10;
  const mainRadius = 200;

  const tickWidth = 6;
  const tickRadius = 170;
  const tickLength = 25;
  const canvasSize = 500;
  const colorWhite = "#FFF";
  const colorBlack = "#000";
  const colorGreen = "#4CAF50"; // "rgb(139, 195, 74)";
  const colorRed = "rgba(244, 67, 54, 0.5)"; // "rgba(255, 87, 34, 0.5)" // "#F44336"; // ;

  const drawCircleStroke = (ctx: any, fromMinute: number, toMinute: number, color: string,
                            radius?: number, lineWidth?: number, lineCap?: string) => {
    const clockRadius = radius || mainRadius;

    ctx.beginPath();
    ctx.lineWidth = lineWidth || defaultLineWidth;
    ctx.strokeStyle = color;
    ctx.lineCap = lineCap || "butt";

    const startAngle = dayMinuteToRadian(fromMinute);
    const endAngle = dayMinuteToRadian(toMinute);

    ctx.arc(canvasSize / 2, canvasSize / 2, clockRadius, startAngle, endAngle);
    ctx.stroke();
  };

  const UTCToClockTime = (epoch: number): number => {
    const date = new Date(0);
    date.setUTCMilliseconds(epoch);
    return date.getHours() * minutesInHour + date.getMinutes();
  };

  const capLimitMin = (currentTime: number, limitTime: number, minHourRange: number): number => {
    return Math.max(limitTime, currentTime - minHourRange * oneHour);
  };

  const capLimitMax = (currentTime: number, limitTime: number, maxHourRange: number): number => {
    return Math.min(limitTime, currentTime + maxHourRange * oneHour);
  };

  const drawAvailavleSlots = (ctx: any) => {
    const minutes = UTCToClockTime(props.time);
    drawCircleStroke(ctx,
      minutes - clockHoursBackwards * minutesInHour,
      minutes + clockHoursForward * minutesInHour,
      colorGreen, mainRadius, defaultLineWidth, "round");
  };

  const drawBusySlots = (ctx: any) => {
    const mappedAllocations = props.allocations
    .map((a: Allocation) => ({from: UTCToClockTime(capLimitMin(props.time, a.from, clockHoursBackwards)),
                       to: UTCToClockTime(capLimitMax(props.time, a.to, clockHoursForward))}));

    mappedAllocations
    .forEach((e: {from: number, to: number}) => {
      drawCircleStroke(ctx, e.from, e.to, colorBlack, mainRadius - defaultLineWidth / 2, 2 * defaultLineWidth);
    });

    mappedAllocations
    .forEach((e: {from: number, to: number}) => {
      drawCircleStroke(ctx, e.from, e.from + 1, colorRed, mainRadius - defaultLineWidth, 3 * defaultLineWidth);
      drawCircleStroke(ctx, e.from, e.to, colorRed, mainRadius - defaultLineWidth / 2, 2 * defaultLineWidth);
      drawCircleStroke(ctx, e.to, e.to + 1, colorRed, mainRadius - defaultLineWidth , 3 * defaultLineWidth);
    });
  };

  const drawClock = (ctx: any) => {
    const minutes = UTCToClockTime(props.time);

    drawCircleStroke(ctx, minutes - (tickWidth / 2 - 1), minutes + tickWidth / 2, colorWhite, tickRadius, tickLength);
    drawCircleStroke(ctx, minutes, minutes + 1, colorBlack, mainRadius - defaultLineWidth / 2, 2 * defaultLineWidth);

    // draw 30 min slots
    for (let i = 0; i < 24; i++) {
      const minutesInHalfHour = minutesInHour / 2;
      // long line on each full hour and short on not full hour
      if (i % 2) {
        drawCircleStroke(ctx, i * minutesInHalfHour, i * minutesInHalfHour + 1, colorWhite, 198, 12);
      } else {
        drawCircleStroke(ctx, i * minutesInHalfHour, i * minutesInHalfHour + 1, colorWhite,
          mainRadius - defaultLineWidth / 2, 2 * defaultLineWidth);
      }
    }
  };

  const draw = (ctx: any) => {
    // Draw available slots for whole day
    drawAvailavleSlots(ctx);

    // Draw busy slots for given allocations
    drawBusySlots(ctx);

    // Draw current time
    drawClock(ctx);
  };

  const canvas: any = React.createRef();
  // [TODO] This component need to be smart component and this timeout then can be removed
  setTimeout(() => {
    if (canvas.current && canvas.current.getContext) {
      const ctx = canvas.current.getContext("2d");

      canvas.current.width = canvasSize;
      canvas.current.height = canvasSize;
      draw(ctx);
    }
  }, 10);

  return (
    <div className="ClockView">
      <span>{formatTimeStamp(props.time)}</span>
      <canvas className="ClockViewCanvas" id="canvas" ref={canvas} />
    </div>
  );
};

export default ClockView;
