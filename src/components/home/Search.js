import "./Home.css"

function Search({ searchTerm, onSearchChange }) {
    return (
      <div className="searchbar">
        <input
        type="text"
        id="search"
        placeholder="Type a name to search🚗..."
         />
      </div>
    );
  }
  
  export default Search;