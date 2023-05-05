import { useState, useEffect } from 'react';
import Search from './Search';
import Today from './Today';

function WeatherContainer() {
  // const [search, setSearch] = useState('');
  // const [todaysWeather, setTodaysWeather] = useState([]);
  // const getWeather = async (lat, lon) => {
  //   const response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=090e4e64cd7d949a4ec9129c4689cd95`
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // };
  // const getCoords = async (query) => {
  //   const response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=090e4e64cd7d949a4ec9129c4689cd95`
  //   );
  //   const data = await response.json();
  //   console.log(data);
  //   const { lat, lon } = data.coord;
  //   setTodaysWeather(data);
  //   getWeather(lat, lon);
  // };
  // useEffect(() => {
  //   setSearch('Scranton');
  // }, []);
  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   getCoords(search);
  // };
  // return (
  //   <>
  //     <Search
  //       value={search}
  //       handleInputChange={(e) => setSearch(e.target.value)}
  //       handleFormSubmit={handleFormSubmit}
  //     />
  //     <Today data={todaysWeather} />
  //     {/* {todaysWeather ? <Today data={todaysWeather} /> : null} */}
  //   </>
  // );
}

export default WeatherContainer;
