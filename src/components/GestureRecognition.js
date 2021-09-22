import React, { useState, useEffect, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { useGesture } from '../contexts/GestureProvider';
import { useSocket } from '../contexts/SocketProvider';
import { drawHand } from '../utils/draw';

import '../assets/css/GestureRecognition.css';

const GestureRecognition = props => {
  const socket = useSocket();
  const { results } = useGesture();
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const predictions = results.predictions;

  const styles = {
    display: props.display ? props.display : 'none',
  };

  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    if (predictions) {
      drawHand(predictions, ctx);
    }
  }, [predictions]);

  const sendImage = useCallback(() => {
    if (
      typeof videoRef.current !== 'undefined' &&
      videoRef.current !== null &&
      videoRef.current.video.readyState === 4
    ) {
      const imageSrc = videoRef.current.getScreenshot();
      // console.log(videoRef.current.video);
      socket.emit('process-input', imageSrc.replace('data:image/jpeg;base64,', ''));
    }
  }, [socket]);

  // useEffect(() => {
  //   if (socket) {
  //     socket.on('start-transmission', () => {
  //       const interval = setInterval(() => {
  //         sendImage();
  //         console.log(videoRef.current.video);
  //         console.log('sec');
  //       }, 10000);

  //       socket.on('disconnect', () => {
  //         clearInterval(interval);
  //       });
  //     });
  //   }
  // }, [sendImage, socket]);

  // Insert view pages inside
  return (
    <div className="main">
      <Webcam ref={videoRef} audio={false} screenshotFormat="image/jpeg" className="box" style={styles} />
      <canvas ref={canvasRef} className="box" style={styles} />
    </div>
  );
};

export default GestureRecognition;
