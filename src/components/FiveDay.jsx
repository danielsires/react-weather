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
        <h1>{dayjs(obj.dt_txt.split(' ')[0]).format('dddd')}</h1>
        <h1>{dayjs(obj.dt_txt.split(' ')[0]).format('MM/DD/YYYY')}</h1>
        <h1>{obj.main.temp}</h1>
      </div>
    ));
  } else {
    return null;
  }
}

export default FiveDay;
