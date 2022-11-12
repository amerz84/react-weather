import "./current-weather.css";

const CurrentWeather = ({ data }: any) => {
  return (
    <div className="weather-card">
      <div className="top">
        <div className="weather-text">
          <h2 className="city">{data.city}</h2>
          <p className="weather-description">{data.current.weather[0].main}</p>
        </div>
        <img
          src={`icons/${data.current.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <div className="temperature">
          <h1>{Math.round(data.current.temp)}</h1>
          <span>°F</span>
        </div>
        <div className="details">
          <div className="parameter-row">
            <h4 className="parameter-label">Details</h4>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">
              {Math.round(data.current.feels_like)}°F
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Windspeed (mph)</span>
            <span className="parameter-value">{data.current.wind_speed}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity (%)</span>
            <span className="parameter-value">{data.current.humidity}</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure (hPa)</span>
            <span className="parameter-value">{data.current.pressure}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
