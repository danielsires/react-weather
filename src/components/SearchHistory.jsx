import React from 'react';

function SearchHistory({ data, handleSearchHistoryClick }) {
  console.log(data);
  return (
    <div id="search-history-buttons">
      {data.map((city, i) => (
        <button onClick={handleSearchHistoryClick} value={city} key={i}>
          {city}
        </button>
      ))}
    </div>
  );
}

export default SearchHistory;
