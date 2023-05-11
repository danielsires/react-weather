import { useState, useEffect } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Today from './components/Today';
import FiveDay from './components/FiveDay';

function App() {
  const storedArray = localStorage.getItem('search-history');
  const data = storedArray ? JSON.parse(storedArray) : [];

  const [searchHistory, setSearchHistory] = useState(data);
  const [search, setSearch] = useState('');
  const [todaysWeather, setTodaysWeather] = useState(null);
  const [fiveDayForecast, setFiveDayForecast] = useState([]);

  useEffect(() => {
    setSearch('');
  }, [todaysWeather]);

  useEffect(() => {
    localStorage.setItem('search-history', JSON.stringify(searchHistory));
  }, [searchHistory]);

  const getWeather = async (lat, lon) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    setFiveDayForecast(data);
    console.log(data);
  };

  const getCoords = async (query) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
    );
    const data = await response.json();
    console.log(data);
    const { lat, lon } = data.coord;
    setTodaysWeather(data);
    getWeather(lat, lon);
  };

  const capitalizeSearch = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchHistory.indexOf(capitalizeSearch(search)) !== -1) {
      getCoords(search);
    } else {
      setSearchHistory([...searchHistory, capitalizeSearch(search)]);
      getCoords(search);
    }

    // if (searchHistory && searchHistory.indexOf(search != -1)) {
    //   return;
    // }
    // localStorage.setItem('search-history', JSON.stringify(searchHistory));
    // getCoords(search);
  };

  return (
    <div className="App">
      <Header />

      <Search
        value={search}
        handleInputChange={(e) => setSearch(e.target.value)}
        handleFormSubmit={
          search || searchHistory.indexOf(search === -1)
            ? handleFormSubmit
            : null
        }
      />
      <Today data={todaysWeather} />
      <div id="fiveDay-forecast">
        <FiveDay forecast={fiveDayForecast} />
      </div>
    </div>
  );
}

export default App;
