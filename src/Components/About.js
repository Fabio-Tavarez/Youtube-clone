import "./About.css";
export default function AboutUs() {
  return (
    <>
      <h1> Project Youtube Clone</h1>
      <p>
        We create a React application that lets you search for YouTube videos
        using the YouTube API, and allows user to choose a video to watch. This
        project assesses the React skills we were able to gained so far.
      </p>
      <h2>User experience</h2>
      <ul>
        <li>
          Navigate between the "Home" page and the "About" page using a nav bar
        </li>
        <li>Learn about the project and developers on the "About" page</li>
        <li>
          See a search bar on the home page that allows me to get a list of
          videos based on my search criteria
        </li>
        <li>
          Click on a video thumbnail in order to get to a page that will let me
          play the video I am interested in
        </li>
        <li>
          Share the link to the individual video and someone else will be able
          to see the same video
        </li>
        <li>Visit this app on the internet</li>
        <li>
          Have UI/UX for something went wrong for returning a 400 status, using
          a modal window
        </li>
      </ul>

      <h3>Developers</h3>
      <ul>
        <li>
          <a href="https://github.com/Fabio-Tavarez">Fabio</a>
        </li>
        <li>
          <a href="https://github.com/AmbarimarU">Ambar</a>
        </li>
      </ul>
    </>
  );
}
