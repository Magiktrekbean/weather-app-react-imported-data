import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Dry Ridge",
    temperature: 73,
    date: "Tuesday 10:00",
    description: "Sunny",
    imgUrl: (
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
        alt=""
        srcset=""
      />
    ),
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="Weather">
      <form className="container-fluid mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Please enter a city🌸🌸🌸"
              className="form-control"
            />
          </div>

          <div className="col-3 ">
            <input
              type="submit"
              value="Search"
              className="btn btn-color w-100"
            />
          </div>
        </div>
      </form>

      <h1>{weatherData.city}</h1>
      <ul>
        <li>Last updated: {weatherData.date}</li>
        <li>{weatherData.description}</li>
      </ul>

      <div className="container-fluid">
        <div className="row">
          <div className="col emoji">{weatherData.imgUrl}</div>
          <div className="col">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="temp">
        {weatherData.temperature}
        <span className="unit">
          <a href="http://">ºC</a>|<a href="http://">ºF</a>
        </span>
      </div>
    </div>
  );
}
