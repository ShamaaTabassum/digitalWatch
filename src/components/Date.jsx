import React, { useState, useEffect } from "react";
import GetDate from "../GetDate";

function Date() {
  let [day, setDay] = useState(0);
  let [dateVal, setDateVal] = useState(0);
  let [month, setMonth] = useState("");
  let [year, setYear] = useState(0);

  let weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    let date = GetDate();
    setDay(weekDays[date.getDay()]);
    setDateVal(date.getDate());
    setMonth(months[date.getMonth()]);
    setYear(date.getFullYear());
  }, []);

  return (
    <div className="dateContent">
      <span className="day">{day}</span>,{" "}
      <span className="date">{dateVal} </span>
      <span className="month">{month} </span>
      <span className="year">{year}</span>
    </div>
  );
}

export default Date;
