import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { DataContext } from '../../providers/Data';
// import { videoData } from '../../utils/dataMock';

function VideoPage() {
  const [loading, setLoading] = useState(false);
  const [videoData, setVideoData] = useState([]);
  const data = useContext(DataContext);
  const relatedVideos = JSON.parse(JSON.stringify(videoData)).slice(1);

  const { videoId } = useParams();

  useEffect(() => {
    setLoading(true);
    if (data) {
      setVideoData(data);
    }
    setLoading(false);
  }, [data]);

  console.log(videoData);

  return (
    <section>
      <p>Video Page Here</p>
      {!loading && (
        <iframe
          className="i-frame"
          allowFullScreen
          frameBorder="0"
          title="Título"
          src={`https://www.youtube.com/embed/${videoId}?controls=0`}
          allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        />
      )}
      <p type="button">
        <Link to="/secret"> ← go back</Link>
      </p>
      <aside>
        {relatedVideos.map((video) => (
          <iframe
            key={video.id.videId}
            className="i-frame"
            allowFullScreen
            frameBorder="0"
            title="Título"
            src={`https://www.youtube.com/embed/${video.id.videoId}?controls=0`}
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
          />
        ))}
      </aside>
    </section>
  );
}

export default VideoPage;

// GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCO9zJy7HWrIS3ojB4Lr7Yqw&maxResults=2&type=video&key=[YOUR_API_KEY] HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json
