import React from 'react';
import dayjs from 'dayjs';

function FiveDay({ forecast }) {
  const data = forecast.list;
  const filteredData = data
    ? data.filter((obj) => obj.dt_txt.slice(11, 13) === '12')
    : null;
  console.log(filteredData);
  if (filteredData) {
    return filteredData.map((obj, key) => (
      <div id="day" key={key}>
        <p>{dayjs(obj.dt_txt.split(' ')[0]).format('MM/DD/YYYY')}</p>
        <p>{dayjs(obj.dt_txt.split(' ')[0]).format('dddd')} </p>
        <p>Temp: {Math.ceil(obj.main.temp)}</p>
        <img
          src={`http://openweathermap.org/img/w/${obj.weather[0].icon}.png`}
          alt="weather icon"
        />
      </div>
    ));
  } else {
    return null;
  }
}

export default FiveDay;
