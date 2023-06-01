import { useState, } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Search() {
  const [searchVideo, setSearchVideo] = useState("");
  const [video, setVideo] = useState([]);

  const REACT_APP_API_URL =
    "https://youtube.googleapis.com/youtube/v3/search?key=";

  const key = process.env.REACT_APP_API_KEY_3;
  // useEffect(() => {
  //   fetchData();
  // }, [searchVideo]);

  async function fetchData() {
    try {
      let result = await axios.get(
        REACT_APP_API_URL +
          key +
          `&q=${searchVideo}&maxResults=10&type=video&part=snippet`
      );
      setVideo(result.data.items);
    } catch (e) {
      alert(e);
    }
  }

function handleSubmit(e){
  e.preventDefault();
  fetchData()
  setSearchVideo("");
}

  function handleSearchChange(e) {
    setSearchVideo(e.target.value.toLowerCase());
  }

  return (
    <>
      <form id="search" onSubmit={handleSubmit}>
        <div className="container py-5 py-xxl-5">
          <input
            id="searchBar"
            className="form-control"
            name="searchBar"
            type="text"
            value={searchVideo}
            onChange={handleSearchChange}
            placeholder="Search..."
          />
          <button type="submit" className="btn btn-danger">
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
