function Search({ value, handleInputChange, handleFormSubmit }) {
  return (
    <form id="form">
      <input
        type="text"
        value={value}
        name="search"
        onChange={handleInputChange}
        placeholder="Search City Not ZipCode"
        id="search"
      />
      <button onClick={handleFormSubmit} className="btn">
        Search
      </button>
    </form>
  );
}

export default Search;
