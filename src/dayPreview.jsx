import React from "react";
import classNames from "classnames";
import cloudyDay from "./images/cloudStatic.svg";
import rainyDay from "./images/rainStatic.svg";
import misty from "./images/mistStatic.svg";
import thunder from "./images/thunderStatic.svg";
import snowy from "./images/snowStatic.svg";
import sunny from "./images/sunStatic.svg";
export class DayPreview extends React.Component {
  state = {
    weatherForDay: 900,
    selectedDay: false
  };

  whatWeather = () => {
    const weatherPreviews = {
      200: { mod: "forecastGrid__itemBG--stormy", icon: thunder },
      201: { mod: "forecastGrid__itemBG--stormy", icon: thunder },
      202: { mod: "forecastGrid__itemBG--stormy", icon: thunder },
      230: { mod: "forecastGrid__itemBG--stormy", icon: thunder },
      231: { mod: "forecastGrid__itemBG--stormy", icon: thunder },
      232: { mod: "forecastGrid__itemBG--stormy", icon: thunder },
      233: { mod: "forecastGrid__itemBG--stormy", icon: thunder },
      300: { mod: "forecastGrid__itemBG--cloudy", icon: cloudyDay },
      301: { mod: "forecastGrid__itemBG--cloudy", icon: cloudyDay },
      302: { mod: "forecastGrid__itemBG--stormy", icon: thunder },
      500: { mod: "forecastGrid__itemBG--cloudy", icon: rainyDay },
      501: { mod: "forecastGrid__itemBG--cloudy", icon: rainyDay },
      502: { mod: "forecastGrid__itemBG--stormy", icon: thunder },
      511: { mod: "forecastGrid__itemBG--stormy", icon: thunder },
      520: { mod: "forecastGrid__itemBG--cloudy", icon: rainyDay },
      521: { mod: "forecastGrid__itemBG--cloudy", icon: rainyDay },
      522: { mod: "forecastGrid__itemBG--stormy", icon: thunder },
      600: { mod: "forecastGrid__itemBG--snow", icon: snowy },
      610: { mod: "forecastGrid__itemBG--snow", icon: snowy },
      611: { mod: "forecastGrid__itemBG--snow", icon: snowy },
      612: { mod: "forecastGrid__itemBG--snow", icon: snowy },
      621: { mod: "forecastGrid__itemBG--snow", icon: snowy },
      622: { mod: "forecastGrid__itemBG--snow", icon: snowy },
      623: { mod: "forecastGrid__itemBG--snow", icon: snowy },
      700: { mod: "forecastGrid__itemBG--misty", icon: misty },
      711: { mod: "forecastGrid__itemBG--misty", icon: misty },
      721: { mod: "forecastGrid__itemBG--misty", icon: misty },
      731: { mod: "forecastGrid__itemBG--misty", icon: misty },
      741: { mod: "forecastGrid__itemBG--misty", icon: misty },
      751: { mod: "forecastGrid__itemBG--misty", icon: misty },
      800: { mod: "forecastGrid__itemBG--sunny", icon: sunny },
      801: { mod: "forecastGrid__itemBG--sunny", icon: sunny },
      802: { mod: "forecastGrid__itemBG--sunny", icon: sunny },
      803: { mod: "forecastGrid__itemBG--sunny", icon: sunny },
      804: { mod: "forecastGrid__itemBG--cloudy", icon: cloudyDay },
      900: { mod: "forecastGrid__itemBG--cloudy", icon: cloudyDay }
    };
    const type =
      weatherPreviews[this.props.previewData.weather].mod ||
      "forecastGrid__itemBG--cloudy";
    return {
      mod:
        weatherPreviews[this.props.previewData.weather].mod ||
        "forecastGrid__itemBG--cloudy",
      icon: weatherPreviews[this.props.previewData.weather].icon || cloudyDay
    };
  };

  render() {
    const forecastButtonClass = classNames({
      forecastGrid__itemBG: true,
      [this.whatWeather().mod]: true,
      selectedPreviewDay: this.props.selectedDay
    });
    return (
      <li onClick={this.props.switchSelectedDay}>
        <div className={forecastButtonClass}>
          <p>{this.props.previewData.day}</p>
          <p>{this.props.previewData.temperature}</p>
          <img src={this.whatWeather().icon} />
        </div>
      </li>
    );
  }
}
