import React, { useState, useEffect } from 'react';

const DataContext = React.createContext({});

function DataProvider({ children }) {
  const [apiResponse, setApiResponse] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    const API =
      'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&q=popular&type=video&key=AIzaSyAJo6nlfpXltr75BUwKhCabevhoDK4CndM';

    fetch(API, { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        setApiResponse(items);
      });

    return function cleanup() {
      abortController.abort();
    };
  }, []);

  return <DataContext.Provider value={apiResponse}>{children}</DataContext.Provider>;
}

export { DataContext };
export default DataProvider;
