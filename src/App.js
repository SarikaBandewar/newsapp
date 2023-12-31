import './App.css';

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
  const pageSize = 10;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar
          color="#f11946"
          progress={progress}
          height={3}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                category="general"
                key="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                category="business"
                key="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                category="entertainment"
                key="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                category="health"
                key="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                category="science"
                key="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                category="sports"
                key="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                apiKey={apiKey}
                setProgress={setProgress}
                pageSize={pageSize}
                country="in"
                category="technology"
                key="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
