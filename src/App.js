import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  pageSize = 10;
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  pageSize={this.pageSize}
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
                  pageSize={this.pageSize}
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
                  pageSize={this.pageSize}
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
                  pageSize={this.pageSize}
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
                  pageSize={this.pageSize}
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
                  pageSize={this.pageSize}
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
                  pageSize={this.pageSize}
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
                  pageSize={this.pageSize}
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
  }
}
