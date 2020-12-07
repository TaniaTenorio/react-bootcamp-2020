import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Secret.styles.css';
import { useHistory } from 'react-router';
import { DataContext } from '../../providers/Data';
import Card from '../../components/Card';

// import { videoData } from '../../utils/dataMock';

function SecretPage() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState('');
  const [searchData, setSearchData] = useState([]);
  const data = useContext(DataContext);

  const history = useHistory();

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=popular&type=video&key=AIzaSyAJo6nlfpXltr75BUwKhCabevhoDK4CndM`
  //   )
  //     .then((res) => res.json())
  //     .then(({ items }) => {
  //       setLoading(false);
  //       setSearchData(items);
  //     });
  // }, []);

  useEffect(() => {
    setLoading(true);
    if (data) {
      setSearchData(data);
    }
    setLoading(false);
  }, [data]);

  const fetchData = (e) => {
    e.preventDefault();
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${value}&type=video&key=AIzaSyAJo6nlfpXltr75BUwKhCabevhoDK4CndM`
    )
      .then((res) => res.json())
      .then(({ items }) => {
        setSearchData(items);
      });
  };

  return (
    <main className="secret-view">
      <header className="secret-header">
        <p>YOUR VIDEOS</p>
        <form onSubmit={fetchData}>
          <input
            type="text"
            id="search"
            name="search"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Go!</button>
        </form>
      </header>
      <section className="main-container">
        <section className="cards-container">
          {!loading &&
            searchData.map((item) => {
              return (
                <Card
                  key={item.etag}
                  source={item.snippet.thumbnails.default.url}
                  title={item.snippet.title}
                  description={item.snippet.description}
                  onClickHandler={() => history.push(`/video/${item.id.videoId}`)}
                />
              );
            })}
        </section>
      </section>
      <footer className="secret-footer">
        <pre>
          welcome, voyager...
          <Link to="/"> ← go back</Link>
        </pre>
      </footer>
    </main>
  );
}

export default SecretPage;

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=songs&type=video&key=AIzaSyAJo6nlfpXltr75BUwKhCabevhoDK4CndM
