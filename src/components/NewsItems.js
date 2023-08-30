import React, { Component } from 'react';
import someImg from './photo-1.avif';

export default class NewsItems extends Component {
  render() {
    let { title, description, imgurl, newsurl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card" style={{ width: '18rem' }}>
          <img
            src={!imgurl ? someImg : imgurl}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{' '}
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {source}
                <span className="visually-hidden">unread messages</span>
              </span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? 'Unknown' : author} on{' '}
                {new Date(date).toUTCString()}
              </small>
            </p>
            <a
              href={newsurl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
