import React, { useRef, useEffect } from 'react';
import { drawHand } from '../utils/draw';

export const DrawGesture = ({ handGesture }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    if (handGesture) {
      drawHand(handGesture, ctx);
    }
  }, [handGesture]);

  const styles = {
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
    textAlign: 'center',
    zindex: 9,
    width: 10,
    height: 10,
  };
  return (
    <div>
      <canvas ref={canvasRef} style={styles} />
    </div>
  );
};
