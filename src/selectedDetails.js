import React from "react";
import "./index.css";

export function LocationDisplay(props) {
  return (
    <div className="selectedDetails__location">
      <h2>Manchester</h2>
    </div>
  );
}

export function DateAndTimeDisplay(props) {
  return (
    <div className="selectedDetails__dateTime">
      <h3>
        {props.day}, {props.date}
      </h3>
      <h3> {props.time}</h3>
    </div>
  );
}
