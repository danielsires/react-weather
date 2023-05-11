import React from 'react';

function Today({ data }) {
  console.log(data);

  return (
    <>
      {data ? (
        <div id="today-forecast">
          <h1>{}</h1>
          <p>{data.name}</p>
          <p>Temp High: {Math.ceil(data.main.temp_max)}</p>
          <p>Temp Low: {Math.ceil(data.main.temp_min)}</p>

          <img
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt="weather icon"
          />
        </div>
      ) : null}
    </>
  );
}

export default Today;
