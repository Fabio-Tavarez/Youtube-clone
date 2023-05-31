import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Search() {
  const [searchVideo, setSearchVideo] = useState("");
  const [video, setVideo] = useState([]);

  const REACT_APP_API_URL =
    "https://youtube.googleapis.com/youtube/v3/search?key=";

  const key = process.env.REACT_APP_API_KEY;
  useEffect(() => {
    fetchData();
  }, [searchVideo]);
  console.log([searchVideo]);
  async function fetchData() {
    try {
      let result = await axios.get(
        REACT_APP_API_URL +
          key +
          `&q=${searchVideo}&maxResults=10&type=video&part=snippet`
      );
      setVideo(result.data.items);
      console.log(video);
    } catch (e) {
      console.log(e);
    }
  }

  function handleSearchChange(e) {
    setSearchVideo(e.target.value.toLowerCase());
  }

  return (
    <>
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
          <button type="button" className="btn btn-danger">
            Search
          </button>
        </div>
        {/* <p>{ searchVideo }</p> */}
      </form>
      <div>
        {video.map((item) => {
          return (
            <Link to={`/videos/${item.id.videoId}`} key={item.id.videoId}>
              <div>
                <img src={item.snippet.thumbnails.medium.url} />
                <h2>{item.snippet.title}</h2>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default Search;
// item.id.videoId = key
// item.snippet.title = Video Name
// item.snippet.thumbnails.default.url = thumbmail
