import React from "react";
import { formatTimeStamp } from "../../../shared/utility";
import "./TimeView.scss";

// [TODO] show overlapping events with different color, in general overlapping events should be tested if they work correctly
const timeView = (props: any) => {

  const mainRadius = 240;
  const timeRadius = 225;
  const canvasSize = 500;
  const greenColor = "#4CAF50"; //"rgb(139, 195, 74)";
  const redColor = "rgba(244, 67, 54, 0.5)"; //"rgba(255, 87, 34, 0.5)" // "#F44336"; // ;

  function drawCircleStroke(ctx: any, fromMinute: number, toMinute: number, color: string, radius?: number, lineWidth?: number) {
    const clockRadius = radius || mainRadius;

    ctx.beginPath();
    ctx.lineWidth = lineWidth || 4;
    ctx.strokeStyle = color;

    function dayMinuteToRadian(minute: number) {
      const minuteRadian = 2 * Math.PI / (12 * 60);
      const startingRadian = -0.5 * Math.PI;
      return startingRadian + minute * minuteRadian;
    }

    const startAngle = dayMinuteToRadian(fromMinute);
    const endAngle = dayMinuteToRadian(toMinute);

    ctx.arc(canvasSize / 2, canvasSize / 2, clockRadius, startAngle, endAngle);
    ctx.stroke();
  }

  function UTCToClockTime(epoch: number): number {
    const date = new Date(0);
    date.setUTCMilliseconds(epoch);
    return date.getHours() * 60 + date.getMinutes();
  };

  function capLimitMin(currentTime: number, limitTime: number, minHourRange: number) {
    return Math.max(limitTime, currentTime - minHourRange * 60 * 60 * 1000);
  }

  function capLimitMax(currentTime: number, limitTime: number, maxHourRange: number) {
    return Math.min(limitTime, currentTime + maxHourRange * 60 * 60 * 1000);
  }

  function drawCurrentTime(ctx: any) {
    const minutes = UTCToClockTime(props.time);
    // Draw available slots for whole day
    ctx.lineCap = "round";
    drawCircleStroke(ctx, minutes - 60, minutes - 120, greenColor, 200, 10);
    
    ctx.lineCap = "butt";
    // Draw busy slots for given allocations
    const mappedAllocations = props.allocations
    .map((a: any) => ({from: capLimitMin(props.time, a.from, 1), to: capLimitMax(props.time, a.to, 10)}))
    .map((a: any) => ({from: UTCToClockTime(a.from), to: UTCToClockTime(a.to)}));
    
    mappedAllocations
    .forEach((e: any) => {
      drawCircleStroke(ctx, e.from, e.to, "#000", 195, 20)
    });

    mappedAllocations
    .forEach((e: any) => {
      drawCircleStroke(ctx, e.from, e.from + 1, redColor, 190, 30)
      drawCircleStroke(ctx, e.from, e.to, redColor, 195, 20)
      drawCircleStroke(ctx, e.to, e.to + 1, redColor, 190, 30)
    });
    
    // Draw current time
    drawCircleStroke(ctx, minutes - 2, minutes + 3, "#FFF", 170, 25);
    drawCircleStroke(ctx, minutes, minutes + 1, "#000", 195, 20);

    // draw 30 min slots
    for (let i = 0; i < 24; i++) {
      // long line on each full hour and short on not full hour
      if (i % 2) {
        drawCircleStroke(ctx, i * 30, i * 30 + 1, "#FFF", 198, 12);
      } else {
        drawCircleStroke(ctx, i * 30, i * 30 + 1, "#FFF", 195, 20);
      }
    }
    
  }

  let canvas: any = React.createRef();
  // [TODO] This component need to be smart component and this timeout then can be removed
  setTimeout(function () {
    if (canvas.current && canvas.current.getContext) {
      const ctx = canvas.current.getContext("2d");

      canvas.current.width = canvasSize;
      canvas.current.height = canvasSize;
      drawCurrentTime(ctx);
    }
  }, 10)

  return (
    <div className="TimeView">
      <span>{formatTimeStamp(props.time)}</span>
      <canvas className="TimeViewCanvas" id="canvas" ref={canvas}></canvas>
    </div>
  );
};

export default timeView;
