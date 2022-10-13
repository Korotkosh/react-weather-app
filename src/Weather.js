import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              outoFocus="on"
            />
          </div>
          <div className="col-3">
            <button type="Submit" className="btn btn-primary w-100">
              Search
            </button>
          </div>
        </div>
      </form>
      <h1>Kyiv</h1>
      <ul>
        <li>Thursday 13:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="cloudy"
          ></img>{" "}
          <span className="temperature">12</span>
          <span className="unit">°C</span>
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
