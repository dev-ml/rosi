import React from "react";
import { formatTimeStamp } from "../../../shared/utility";
import "./TimeView.scss";

// [TODO] show overlapping events with different color
const timeView = (props: any) => {

  const mainRadius = 240;
  const timeRadius = 225;
  const canvasSize = 500;
  const greenColor = "#4CAF50"; //"rgb(139, 195, 74)";
  const redColor = "#F44336"; // "rgb(255, 87, 34)";

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

  function drawCurrentTime(ctx: any) {
    const minutes = UTCToClockTime(props.time);
    // Draw current time
    drawCircleStroke(ctx, minutes - 2, minutes + 2, "#000", 160, 20);

    // Draw circle background
    drawCircleStroke(ctx, minutes + 1, minutes, "#000", 200, 22);
    
    // Draw available slots for whole day
    drawCircleStroke(ctx, minutes - 60, minutes - 120, greenColor, 200, 5);
    
    // Draw busy slots for given allocations
    // [TODO] The busy slots drawing should have min and max value so it shouldn't exceed 11 hours threshold
    props.allocations
    .map((a: any) => ({from: UTCToClockTime(a.from), to: UTCToClockTime(a.to)}))
    .forEach((e: any) => drawCircleStroke(ctx, e.from, e.to, redColor, 200, 12));
    
    // draw 30 min slots
    for (let i = 0; i < 24; i++) {
      // long line on each full hour and short on not full hour
      if (i % 2) {
        drawCircleStroke(ctx, i * 30, i * 30 + 1, "#000", 200, 22);
      } else {
        drawCircleStroke(ctx, i * 30, i * 30 + 1, "#000", 196, 29);
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
