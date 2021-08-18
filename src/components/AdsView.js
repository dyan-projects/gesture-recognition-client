import React from 'react';

import '../assets/css/AdsView.css';

export const AdsView = () => {
  return (
    <div>
      <div className="main-container">
        <div className="top">
          <div className="tama-logo"></div>
          <div className="visual-feedback"></div>
        </div>

        <div className="current-ad">
          <div className="previous"></div>
          <div className="advert"></div>
          <div className="next"></div>
        </div>

        <div className="thumbnails">
          <div className="thumbnail"></div>
          <div className="thumbnail"></div>
          <div className="thumbnail"></div>
        </div>

        <div className="ratings">
          <div className="rate">
            <div className="like-emoji"></div>
            <div className="likes-count">XXX</div>
          </div>
          <div className="rate">
            <div className="dislike-emoji"></div>
            <div className="dislikes-count">XXX</div>
          </div>
        </div>

        <div className="exit">
          <div className="exit-text">Exit</div>
          <div className="exit-gesture"></div>
        </div>
      </div>
    </div>
  );
};
