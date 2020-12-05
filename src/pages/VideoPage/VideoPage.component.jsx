import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
// import { videoData } from '../../utils/dataMock';

function VideoPage() {
  const { videoId } = useParams();
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(false);
  //   fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCO9zJy7HWrIS3ojB4Lr7Yqw&maxResults=2&type=video&key=AIzaSyAJo6nlfpXltr75BUwKhCabevhoDK4CndM`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, [videoId]);

  return (
    <div>
      <p>Video {videoId} Page Here</p>
      <iframe
        className="i-frame"
        allowFullScreen
        frameBorder="0"
        title="Título"
        src={`https://www.youtube.com/embed/${videoId}?controls=0`}
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      />
      <p type="button">
        <Link to="/secret"> ← go back</Link>
      </p>
    </div>
  );
}

export default VideoPage;

// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCO9zJy7HWrIS3ojB4Lr7Yqw&maxResults=2&type=video&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
