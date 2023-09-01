import React from 'react';
import someImg from './photo-1.avif';

const NewsItems = (props) => {
  let { title, description, imgurl, newsurl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0',
          }}
        >
          <span className="badge rounded-pill bg-danger">
            {source}
            <span className="visually-hidden">unread messages</span>
          </span>
        </div>
        <img
          src={!imgurl ? someImg : imgurl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
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
};

export default NewsItems;
