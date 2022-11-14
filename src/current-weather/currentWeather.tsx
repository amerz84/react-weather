import "./current-weather.css";

const CurrentWeather = ({ data }: any) => {
  return (
    <div className="weather-card">
      <div className="weather-card-section__top">
        <div className="weather-card-title-text">
          <h2 className="weather-card-title-text__city">{data.city}</h2>
          <p className="weather-card-title-text__description">{data.current.weather[0].main}</p>
        </div>
        <img
          src={`icons/${data.current.weather[0].icon}.png`}
          alt="weather icon"
          className="weather-card-title-image"
        />
      </div>
      <div className="weather-card-section__bottom">
        <div className="weather-card-temperature">
          <h1>{Math.round(data.current.temp)}</h1>
          <span>°F</span>
        </div>
        <div className="weather-card-details">
          <div className="weather-card-details__row">
            <h4 className="weather-card-details__label">Details</h4>
          </div>
          <div className="weather-card-details__row">
            <span className="weather-card-details__label">Feels Like</span>
            <span className="weather-card-details__value">
              {Math.round(data.current.feels_like)}°F
            </span>
          </div>
          <div className="weather-card-details__row">
            <span className="weather-card-details__label">Windspeed (mph)</span>
            <span className="weather-card-details__value">{data.current.wind_speed}</span>
          </div>
          <div className="weather-card-details__row">
            <span className="weather-card-details__label">Humidity (%)</span>
            <span className="weather-card-details__value">{data.current.humidity}</span>
          </div>
          <div className="weather-card-details__row">
            <span className="weather-card-details__label">Pressure (hPa)</span>
            <span className="weather-card-details__value">{data.current.pressure}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
