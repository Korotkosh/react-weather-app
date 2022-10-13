import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input type="search" placeholder="Enter a city.." />
        <button type="Submit" className="btn btn-primary">
          Search
        </button>
      </form>
      <h1>Kyiv</h1>
      <ul>
        <li>Thursday 13:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          ></img>{" "}
          12 °C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 24% </li>
            <li>Humidity: 64% </li>
            <li>Wind: 0 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
