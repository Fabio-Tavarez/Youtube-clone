import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "react-modal";


function Search() {
Modal.setAppElement("#root");



  const [searchVideo, setSearchVideo] = useState("");
  const [video, setVideo] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [error, setError] = useState("");

  const REACT_APP_API_URL =
    "https://youtube.googleapis.com/youtube/v3/search?key=";

  const key = process.env.REACT_APP_API_KEY;
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
      setIsOpen(true);
      setError(e.message);
      console.log(e.message);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
    setSearchVideo("");
  }

  function handleSearchChange(e) {
    setSearchVideo(e.target.value.toLowerCase());
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        
        onRequestClose={() => {
          setIsOpen(false);
        }}
      >
        <div>
          <h2>Warning</h2>
          <p>{error}</p>
        </div>
      </Modal>
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
      </form>
      <div className="container">
        <div className="row row-cols-2">
          {video.map((item) => {
            return (
              <div className="col">
                <Link to={`/videos/${item.id.videoId}`} key={item.id.videoId}>
                  <div>
                    <img src={item.snippet.thumbnails.medium.url} alt="video"/>
                    <h2>{item.snippet.title}</h2>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Search;
