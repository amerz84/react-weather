import { useState } from "react";
import "./App.css";
import CurrentWeather from "./current-weather/currentWeather";
import Forecast from "./forecast/forecast";
import Search from "./search/search";
import WeatherTab from "./tab/tab";

function App() {
  const [weather, setWeather] = useState(null);

  const handleOnSearchChange = (searchData: any) => {
    const [latitude, longitude] = searchData.value.split(" ");

/*     fetch(
      `${WEATHER_API_BASE_URL}?lat=${latitude}&lon=${longitude}&units=imperial&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    )
      .then(async (response) => {
        const data = await response.json();
        setWeather({ city: searchData.label, ...data });
        console.log(weather);
      })
      .catch((err) => {
        console.log(err);
      }); */
  };

  console.log(weather);

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      <WeatherTab></WeatherTab>
    </div>
  );
}

export default App;
