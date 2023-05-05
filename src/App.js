import { useState, useEffect } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Today from './components/Today';
// import WeatherContainer from './components/WeatherContainer';
// import Today from './components/Today';

function App() {
  const [search, setSearch] = useState('');
  const [todaysWeather, setTodaysWeather] = useState(null);

  useEffect(() => {
    setSearch('');
  }, [todaysWeather]);

  const getWeather = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=090e4e64cd7d949a4ec9129c4689cd95`
    );
    const data = await response.json();
    // setTodaysWeather(data);
    console.log(data);
  };

  const getCoords = async (query) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=090e4e64cd7d949a4ec9129c4689cd95`
    );
    const data = await response.json();
    console.log(data);
    const { lat, lon } = data.coord;
    setTodaysWeather(data);
    getWeather(lat, lon);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    getCoords(search);
  };

  return (
    <div className="App">
      <Header />

      <Search
        value={search}
        handleInputChange={(e) => setSearch(e.target.value)}
        handleFormSubmit={handleFormSubmit}
      />
      <Today data={todaysWeather} />
      {/* {todaysWeather ? <Today data={todaysWeather} /> : null} */}

      {/* <WeatherContainer /> */}
      {/* <Today data={weather} /> */}
    </div>
  );
}

export default App;
