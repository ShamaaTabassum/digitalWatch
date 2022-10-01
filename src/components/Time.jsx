import React, { useState, useEffect } from "react";

function Time({ ...props }) {
  let [ampm, setAmPm] = useState(false);
  if (props.hour > 12) {
    props.setHour(props.hour - 12);
  }

  useEffect(() => {
    if (props.hour === 12) setAmPm(!ampm);
  }, [props.hour]);

  return (
    <div className="time">
      <div className="timeContent">
        <span className="hours">
          {props.hour < 10 ? `0${props.hour}` : props.hour}
        </span>
        :
        <span className="minutes">
          {props.minute < 10 ? `0${props.minute}` : props.minute}
        </span>
        :
        <span className="seconds">
          {props.second < 10 ? `0${props.second}` : props.second}
        </span>
      </div>
      <span className="ap">{ampm ? "AM" : "PM"}</span>
    </div>
  );
}

export default Time;
