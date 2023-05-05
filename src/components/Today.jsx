import React from 'react';

function Today({ data }) {
  console.log(data);

  return (
    <div>
      {data ? (
        <>
          <p>{data.name}</p>
          <p>Temp: {data.main.temp}</p>
        </>
      ) : null}
    </div>
  );
}

export default Today;
