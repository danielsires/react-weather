import React from 'react';

function Today({ data }) {
  console.log(data);

  return (
    <>
      {data ? (
        <div id="today-forecast">
          <p>{data.name}</p>
          <p>Temp: {data.main.temp}</p>
          <img
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            alt=""
          />
        </div>
      ) : null}
    </>
    // </div>
  );
}

export default Today;
