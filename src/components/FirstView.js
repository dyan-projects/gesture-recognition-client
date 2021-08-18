import React from 'react';

import '../assets/css/FirstView.css';

export const FirstView = () => {
  return (
    <div className="main-container">
      <div className="top">
        <div className="tama-logo"></div>
        <div className="tama-title">TaMa</div>
      </div>

      <div className="sub-container">
        <div className="wave-container">
          <div className="wave-gesture"></div>
          <div className="wave-text">Wave to Start</div>
        </div>
        <div className="list-gestures">
          <div className="gesture-container">
            <div className="gesture-emoji">
              <span role="img" aria-label="thumbs-up">
                👍
              </span>
            </div>
            <div className="gesture-description">Like</div>
          </div>
          <div className="gesture-container">
            <div className="gesture-emoji">
              <span role="img" aria-label="thumbs-down">
                👎
              </span>
            </div>
            <div className="gesture-description">Dislike</div>
          </div>
          <div className="gesture-container">
            <div className="gesture-emoji">
              <span role="img" aria-label="point-right">
                👉
              </span>
            </div>
            <div className="gesture-description">Next</div>
          </div>
          <div className="gesture-container">
            <div className="gesture-emoji">
              <span role="img" aria-label="point-left">
                👈
              </span>
            </div>
            <div className="gesture-description">Previous</div>
          </div>
          <div className="gesture-container">
            <div className="gesture-emoji">
              <span role="img" aria-label="victory">
                ✌
              </span>
            </div>
            <div className="gesture-description">Cancel</div>
          </div>
          <div className="gesture-container">
            <div className="gesture-emoji">
              <span role="img" aria-label="closed-fist">
                ✊
              </span>
            </div>
            <div className="gesture-description">Exit</div>
          </div>
        </div>
      </div>
    </div>
  );
};
