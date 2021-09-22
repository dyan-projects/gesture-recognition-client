import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image';
import * as gs from '../assets/visual-feedback-icons';

import '../assets/css/DisplayGesture.css';

const DisplayGesture = ({ detectedGesture }) => {
  const [emoji, setEmoji] = useState('loading_icon');

  const images = {
    thumbs_up: gs.thumbs_up,
    thumbs_down: gs.thumbs_down,
    victory: gs.victory,
    left: gs.left,
    right: gs.right,
    open_palm: gs.open_palm,
    closed_fist: gs.closed_fist,
    loading_icon: gs.loading_icon,
  };

  useEffect(() => {
    setEmoji(detectedGesture);
  }, [detectedGesture]);

  return (
    <div className="main">
      <Image
        alt="Detected gesture"
        src={emoji ? images[emoji] : images.loading_icon}
        fluid
        className={`emoji ${!emoji | (emoji === 'loading_icon') ? 'loading-icon' : ''}`}
      />
    </div>
  );
};

export default DisplayGesture;
