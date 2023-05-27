import {useState} from 'react'

function Search(handleFetchData) {

    const [searchVideo, setSearchVideo] = useState("");

function handleSearchChange(e) {
  setSearchVideo(e.target.value.toLowerCase());
  handleFetchData(e.target.value);
}

  

  return (
      <form id="search" onSubmit={(e) => e.preventDefault()}>
        <div className="container py-5 py-xxl-4">
              <input
                id="searchBar"
                className="form-control"
                name="searchBar"
                type="text"
                value={searchVideo}
                onChange={handleSearchChange}
                placeholder="Search..."
              />
              <button
                type="button"
                className="btn btn-danger"
                // onClick={}
              >
                Search
              </button>
        </div>
      </form>
  );
}

export default Search