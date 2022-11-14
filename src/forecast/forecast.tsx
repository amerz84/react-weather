import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import getForecastDays from "./forecast-days";
import "./forecast.css";

const Forecast = ({ data }: any) => {
  while (data.daily.length > 7) {
    data.daily.pop();
  }

  const forecastDays = getForecastDays(data.daily);

  return (
    <div>
      <label className="forecast-title">Daily</label>
      <button onClick={() => console.log(data.daily)}>Click</button>
      <Accordion allowZeroExpanded={true}>
        {data.daily.map((day: any, index: number) => {
          return (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="forecast-item">
                    <img
                      src={`icons/${data.daily[index].weather[0].icon}.png`}
                      alt="forecast weather icon"
                      className="forecast-item__image"
                    />
                    <label className="forecast-item__day">
                      {forecastDays[index]}
                    </label>
                    <label className="forecast-item__description">
                      {data.daily[index].weather[0].description}
                    </label>
                    <label className="forecast-item__temperatures">
                      {Math.round(data.daily[index].temp.max)}°F /{" "}
                      {Math.round(data.daily[index].temp.min)}°F
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="forecast-details">
                  <div className="forecast-details__item">
                    <label className="forecast-details__label">Precipitation</label>
                    <div className="forecast-details__value">{(data.daily[index].pop)*100}%</div>
                  </div>
                  <div className="forecast-details__item">
                    <label className="forecast-details__label">Pressure</label>
                    <div className="forecast-details__value">{data.daily[index].pressure} hPa</div>
                  </div>
                  <div className="forecast-details__item">
                    <label className="forecast-details__label">Humidity</label>
                    <div className="forecast-details__value">{data.daily[index].humidity}%</div>
                  </div>
                  <div className="forecast-details__item">
                    <label className="forecast-details__label">Windspeed</label>
                    <div className="forecast-details__value">{data.daily[index].wind_speed}mph</div>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default Forecast;
