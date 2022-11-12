import { useState } from 'react'
import './App.css'
import CurrentWeather from './current-weather/currentWeather';
import Search from './search/search'
import { WEATHER_API_BASE_URL } from './search/searchService';

function App() {
  const [currWeather, setCurrWeather] = useState(null);

  const handleOnSearchChange = (searchData: any) => {
    const [latitude, longitude] = searchData.value.split(" ");

    fetch(`${WEATHER_API_BASE_URL}?lat=${latitude}&lon=${longitude}&units=imperial&appid=${import.meta.env.VITE_WEATHER_API_KEY}`)
    .then(async response => {
      const data = await response.json();
      setCurrWeather({city: searchData.label, ...data});     
    }).catch(err => {
      console.log(err);
    });
  }

  console.log(currWeather);

  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange} />
      {currWeather && <CurrentWeather data={currWeather}></CurrentWeather>}
    </div>
  )
}

export default App;
