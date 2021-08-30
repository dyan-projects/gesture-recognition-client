import React, { useState, useEffect } from 'react';
import * as gs from '../assets/visual-feedback-icons';

export const DisplayGesture = ({ detectedGesture }) => {
  const [emoji, setEmoji] = useState();

  const styles = {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 400,
    right: 0,
    textAlign: 'center',
    height: 100,
  };

  const images = {
    thumbs_up: gs.thumbs_up,
    thumbs_down: gs.thumbs_down,
    victory: gs.victory,
    left: gs.left,
    right: gs.right,
    open_palm: gs.open_palm,
    closed_fist: gs.closed_fist,
  };

  useEffect(() => {
    setEmoji(detectedGesture);
  }, [detectedGesture]);

  return (
    <div>
      {emoji !== null ? (
        <div>
          <img alt="" src={images[emoji]} style={styles} />
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
