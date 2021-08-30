import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import { useSocket } from '../contexts/SocketProvider';
import { DisplayGesture } from './DisplayGesture';
import { DrawGesture } from './DrawGesture';

const GestureRecognition = () => {
  const socket = useSocket();
  const videoRef = useRef(null);

  if (socket) {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('start-transmission', () => {
      console.log('sending video...');
      // setInterval(() => {
      //   socket.emit('process-input', 'test');
      // }, 10000);
    });
  }

  // Insert view pages inside
  return (
    <div>
      <Webcam ref={videoRef} />
      <DisplayGesture />
      <DrawGesture />
    </div>
  );
};

export default GestureRecognition;
