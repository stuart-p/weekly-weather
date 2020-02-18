import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LocationDisplay, DateAndTimeDisplay } from "./selectedDetails";
import { DayGrid } from "./forecastGrid";
import { fetchWeatherData } from "./weather.model";
import { WeatherImage } from "./pictorialView";

class App extends React.Component {
  state = {
    location: "Manchester",
    weatherForDay: {
      day0: {
        day: "Saturday",
        date: "15/02/20",
        temperature: "8 degrees",
        weather: 900
      },
      day1: {
        day: "Saturday",
        date: "15/02/20",
        temperature: "8 degrees",
        weather: 900
      },
      day2: {
        day: "Saturday",
        date: "15/02/20",
        temperature: "8 degrees",
        weather: 900
      },
      day3: {
        day: "Saturday",
        date: "15/02/20",
        temperature: "8 degrees",
        weather: 900
      },
      day4: {
        day: "Saturday",
        date: "15/02/20",
        temperature: "8 degrees",
        weather: 900
      },
      day5: {
        day: "Saturday",
        date: "15/02/20",
        temperature: "8 degrees",
        weather: 900
      },
      day6: {
        day: "Saturday",
        date: "15/02/20",
        temperature: "8 degrees",
        weather: 900
      }
    },
    currentTime: "18:09",
    displayedWeatherGraphic: 800,
    displayedDay: 0
  };

  getCurrentTime = () => {
    const today = new Date();
    return `${(today.getHours() < 10 ? "0" : "") +
      today.getHours()}:${(today.getMinutes() < 10 ? "0" : "") +
      today.getMinutes()}`;
  };
  getCurrentDay = () => {
    const today = new Date();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    return days[today.getDay()];
  };
  getCurrentDate = () => {
    const today = new Date();
    let date = today.getDate();
    if (date > 3 && date < 21) {
      date += "th";
    } else {
      switch (date % 10) {
        case 1:
          date += "st";
          break;
        case 2:
          date += "nd";
          break;
        case 3:
          date += "rd";
          break;
        default:
          date += "th";
      }
    }
    const months = [
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
      "December"
    ];

    return `${date} ${months[today.getMonth()]}`;
  };
  getArrayOfNextSevenDays = () => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    const today = new Date();
    const dayArray = [];
    for (let i = 0; i < 7; i++) {
      dayArray.push(days[today.getDay()]);
      today.setDate(today.getDate() + 1);
    }
    return dayArray;
  };

  getArrayOfDates = () => {
    const today = new Date();
    const dateArray = [];
    for (let i = 0; i < 7; i++) {
      let thisDate = today.getDate();
      if (thisDate > 3 && thisDate < 21) {
        thisDate += "th";
      } else {
        switch (thisDate % 10) {
          case 1:
            thisDate += "st";
            break;
          case 2:
            thisDate += "nd";
            break;
          case 3:
            thisDate += "rd";
            break;
          default:
            thisDate += "th";
        }
      }
      const months = [
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
        "December"
      ];

      dateArray.push(`${thisDate} ${months[today.getMonth()]}`);

      today.setDate(today.getDate() + 1);
    }
    return dateArray;
  };

  getWeatherData = () => {
    // console.log(fetchWeatherData);
    return fetchWeatherData();
  };
  setWeatherDataRegularly = () => {
    const currentTime = this.getCurrentTime();
    const dayArray = this.getArrayOfNextSevenDays();
    const dateArray = this.getArrayOfDates();
    return this.getWeatherData()
      .then(weatherData => {
        return new Promise((resolve, reject) => {
          this.setState(currentState => {
            const weatherUpdate = {
              ...currentState.weatherForDay
            };
            Object.keys(weatherUpdate).forEach((day, iteratee) => {
              weatherUpdate[day].day = dayArray[iteratee];
              weatherUpdate[day].date = dateArray[iteratee];
              weatherUpdate[
                day
              ].temperature = `${weatherData[iteratee].temperature}\u00B0C`;
              weatherUpdate[day].weather = weatherData[iteratee].weather;
            });
            return {
              currentTime,
              weatherForDay: weatherUpdate,
              displayedWeatherGraphic:
                weatherUpdate[`day${currentState.displayedDay}`].weather
            };
          }, resolve);
        });
      })
      .then(() => {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve();
          }, 60000);
        });
      })
      .then(() => {
        this.setWeatherDataRegularly();
      });
  };

  switchSelectedDay = day => {
    this.setState(currentState => {
      const imageForDay = currentState.weatherForDay[`day${day}`].weather;
      return {
        displayedDay: day,
        displayedWeatherGraphic: imageForDay
      };
    });
  };

  componentDidMount() {
    this.setWeatherDataRegularly();
  }

  render() {
    return (
      <main>
        <header id="topBanner">
          <h1>Weekly Weather Watch</h1>
        </header>
        <section id="selectedDetails">
          <LocationDisplay />
          <DateAndTimeDisplay
            day={this.state.weatherForDay.day0.day}
            date={this.state.weatherForDay.day0.date}
            time={this.state.currentTime}
          />
        </section>
        <aside id="forecastGrid">
          <DayGrid
            dayData={this.getArrayOfNextSevenDays()}
            weatherData={{ ...this.state.weatherForDay }}
            switchSelectedDay={this.switchSelectedDay}
            selectedDay={this.state.displayedDay}
          />
        </aside>
        <section id="pictorialView">
          <WeatherImage graphicToDisplay={this.state.displayedWeatherGraphic} />
        </section>
      </main>
    );
  }
}

export default App;
