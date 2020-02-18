import React from "react";
import "./index.css";
import classNames from "classnames";
import { DayPreview } from "./dayPreview";

export class DayGrid extends React.Component {
  state = {};
  render() {
    return (
      <div className="forecastGrid__list">
        <ul>
          {Object.keys(this.props.weatherData).map((day, iteratee) => {
            return (
              <DayPreview
                key={iteratee}
                previewData={this.props.weatherData[day]}
                switchSelectedDay={() => {
                  this.props.switchSelectedDay(iteratee);
                }}
                selectedDay={this.props.selectedDay === iteratee}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
