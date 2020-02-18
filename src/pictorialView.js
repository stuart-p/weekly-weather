import cloudyDay from "./images/cloudy.svg";
import rainyDay from "./images/rainy.svg";
import misty from "./images/misty.svg";
import thunder from "./images/thunder.svg";
import snowy from "./images/snowy.svg";
import sunny from "./images/sunny.svg";
import React from "react";
import classNames from "classnames";

export function WeatherImage(props) {
  const weatherImages = {
    200: { icon: thunder, mod: "circleBorder--stormy" },
    201: { icon: thunder, mod: "circleBorder--stormy" },
    202: { icon: thunder, mod: "circleBorder--stormy" },
    230: { icon: thunder, mod: "circleBorder--stormy" },
    231: { icon: thunder, mod: "circleBorder--stormy" },
    232: { icon: thunder, mod: "circleBorder--stormy" },
    233: { icon: thunder, mod: "circleBorder--stormy" },
    300: { icon: cloudyDay, mod: "circleBorder--cloudy" },
    301: { icon: cloudyDay, mod: "circleBorder--cloudy" },
    302: { icon: thunder, mod: "circleBorder--stormy" },
    500: { icon: rainyDay, mod: "circleBorder--cloudy" },
    501: { icon: rainyDay, mod: "circleBorder--cloudy" },
    502: { icon: thunder, mod: "circleBorder--stormy" },
    511: { icon: thunder, mod: "circleBorder--stormy" },
    520: { icon: rainyDay, mod: "circleBorder--cloudy" },
    521: { icon: rainyDay, mod: "circleBorder--cloudy" },
    522: { icon: thunder, mod: "circleBorder--stormy" },
    600: { icon: snowy, mod: "circleBorder--snow" },
    610: { icon: snowy, mod: "circleBorder--snow" },
    611: { icon: snowy, mod: "circleBorder--snow" },
    612: { icon: snowy, mod: "circleBorder--snow" },
    621: { icon: snowy, mod: "circleBorder--snow" },
    622: { icon: snowy, mod: "circleBorder--snow" },
    623: { icon: snowy, mod: "circleBorder--snow" },
    700: { icon: misty, mod: "circleBorder--misty" },
    711: { icon: misty, mod: "circleBorder--misty" },
    721: { icon: misty, mod: "circleBorder--misty" },
    731: { icon: misty, mod: "circleBorder--misty" },
    741: { icon: misty, mod: "circleBorder--misty" },
    751: { icon: misty, mod: "circleBorder--misty" },
    800: { icon: sunny, mod: "circleBorder--sunny" },
    801: { icon: sunny, mod: "circleBorder--sunny" },
    802: { icon: sunny, mod: "circleBorder--sunny" },
    803: { icon: sunny, mod: "circleBorder--sunny" },
    804: { icon: cloudyDay, mod: "circleBorder--cloudy" },
    900: { icon: cloudyDay, mod: "circleBorder--cloudy" }
  };
  const displayedImage =
    weatherImages[props.graphicToDisplay].icon || cloudyDay;
  const weatherBackground = classNames({
    circleBorder: true,
    [weatherImages[props.graphicToDisplay].mod]: true
  });
  return (
    <div className={weatherBackground}>
      <img src={displayedImage} className="weatherImage--display" />
    </div>
  );
}
