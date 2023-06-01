import YouTube from "react-youtube";
import { useParams } from "react-router-dom";

export default function View() {
  const { id } = useParams();

  return (
    <div>
      <YouTube videoId={id} />
    </div>
  );
}
