import {useState} from 'react'

function Search() {

    const [searchVideo, setSearchVideo] = useState("");
    
    const handleSearch = (e) => {
        e.preventDefault();
    }

  return (
    <>
      <form id="search" onSubmit={handleSearch}>
        <div className="container py-5 py-xxl-4">
          <input
            id="searchBar"
            className="form-control"
            name="searchBar"
            type="text"
            value={searchVideo}
            onChange={(e) => setSearchVideo(e.target.value)}
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
        {/* <p>{ searchVideo }</p> */}
      </form>
    </>
  );
}

export default Search