import React from 'react';
import dayjs from 'dayjs';

function FiveDay({ forecast }) {
  const data = forecast.list;
  const filteredData = data
    ? data.filter((obj) => obj.dt_txt.slice(11, 13) === '12')
    : null;

  if (filteredData) {
    return filteredData.map((obj, key) => (
      <div id="day" key={key}>
        <p>{dayjs(obj.dt_txt.split(' ')[0]).format('MM/DD/YYYY')}</p>
        <p>{dayjs(obj.dt_txt.split(' ')[0]).format('dddd')} </p>
        <p>Temp High: {Math.ceil(obj.main.temp_max)}</p>
        <p>Temp Low: {Math.ceil(obj.main.temp_min)}</p>
      </div>
    ));
  } else {
    return null;
  }
}

export default FiveDay;
