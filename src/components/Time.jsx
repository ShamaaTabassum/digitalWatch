import React, { useState, useEffect } from "react";
// import GetDate from "../GetDate";

function Time({ ...props }) {
  // let [hour, setHour] = useState(0);
  // let [minute, setMinute] = useState(0);
  // let [second, setSecond] = useState(0);
  let [ampm, setAmPm] = useState(true);

  // useEffect(() => {
  //   setInterval(() => {
  //     let date = GetDate();
  //     setHour(date.getHours());
  //     setMinute(date.getMinutes());
  //     setSecond(date.getSeconds());
  //   }, 1000);
  // }, []);

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
