import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CurrentWeather from "../current-weather/currentWeather";
import Forecast from "../forecast/forecast";
import getWeather from "../weatherService";
import "./tab.css";

const WeatherTab = () => {
  const [weather, setWeather] = useState<any>([]);

  useEffect(() => {
    const getData = () => {
      getWeather()
        .then((response) => {
          setWeather([...response]);
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
        <Tab>Duluth</Tab>
        <Tab>Knoxville</Tab>
        <Tab>McKinney</Tab>
      </TabList>
      {weather.length > 1 && (
        <div>
          <TabPanel>
            <CurrentWeather data={weather[0]}></CurrentWeather>
            <Forecast data={weather[0]}></Forecast>
          </TabPanel>
          <TabPanel>
            <CurrentWeather data={weather[1]}></CurrentWeather>
            <Forecast data={weather[1]}></Forecast>
          </TabPanel>
          <TabPanel>
            <CurrentWeather data={weather[2]}></CurrentWeather>
            <Forecast data={weather[2]}></Forecast>
          </TabPanel>
        </div>
      )}
    </Tabs>
  );
};

export default WeatherTab;
