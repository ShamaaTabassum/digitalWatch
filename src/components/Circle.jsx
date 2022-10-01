import React from "react";

function Circle({ ...props }) {
  return (
    <div className="circles">
      <div className="circle-content" style={{ "--color": "#F9283A" }}>
        <div
          className="dots"
          style={{ transform: `rotateZ(${props.hour * 30}deg)` }}
        ></div>
        <svg>
          <circle
            style={{ strokeDashoffset: `${260 - (260 * props.hour) / 12}` }}
            cx="40"
            cy="40"
            r="40"
          ></circle>
        </svg>
      </div>
      <div className="circle-content" style={{ "--color": "#FEC30B" }}>
        <div
          className="dots "
          style={{ transform: `rotateZ(${props.minute * 6}deg)` }}
        ></div>
        <svg>
          <circle
            style={{
              strokeDashoffset: `${350 - (350 * props.minute) / 60}`,
            }}
            cx="55"
            cy="55"
            r="55"
          ></circle>
        </svg>
      </div>
      <div className="circle-content" style={{ "--color": "#07E1F9" }}>
        <div
          className="dots"
          style={{ transform: `rotateZ(${props.second * 6}deg)` }}
        ></div>
        <svg>
          <circle
            cx="70"
            cy="70"
            r="70"
            style={{
              strokeDashoffset: `${440 - (440 * props.second) / 60}`,
            }}
          ></circle>
        </svg>
      </div>
    </div>
  );
}

export default Circle;
