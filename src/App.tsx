import { useState } from "react";
import "./App.css";
import Search from "./search/search";
import WeatherTab from "./tab/tab";

function App() {
  const [weather, setWeather] = useState(null);

  const handleOnSearchChange = (searchData: any) => {
    const [latitude, longitude] = searchData.value.split(" ");
  }

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      <WeatherTab></WeatherTab>
    </div>
  );
}

export default App;
