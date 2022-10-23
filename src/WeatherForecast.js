import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Fri</div>

          <WeatherIcon code="01d" />

          <div className="WeatherForecast-temp">
            <span className="max">10 °C</span> |{" "}
            <span className="min">28 °C</span>
          </div>
        </div>
      </div>
    </div>
  );
}
