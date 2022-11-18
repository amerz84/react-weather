import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CurrentWeather from "../current-weather/currentWeather";
import Forecast from "../forecast/forecast";
import { City_Duluth } from "../search/searchService";
import getWeather from "../weatherService";
import "./tab.css";

const WeatherTab = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const getData = () => {
      getWeather()
        .then((response) => {
          const data = response;
          setWeather({
            city: `${City_Duluth.city}, ${City_Duluth.state}`,
            ...data,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);

  return (
    <Tabs>
      <TabList>
        <Tab>{City_Duluth.city}</Tab>
      </TabList>
      <TabPanel>
        {weather && <CurrentWeather data={weather}></CurrentWeather>}
        {weather && <Forecast data={weather}></Forecast>}
      </TabPanel>
    </Tabs>
  );
};

export default WeatherTab;
