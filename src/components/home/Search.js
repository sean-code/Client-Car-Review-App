import "./Home.css"

function Search({ searchTerm, onSearchChange }) {
    return (
      <div className="searchbar">
        <input
          type="text"
          id="search"
          placeholder="Type a name to search🚗..."
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </div>
    );
  }
  
  export default Search;