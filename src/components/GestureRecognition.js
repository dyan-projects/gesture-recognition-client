import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import { useSocket } from '../contexts/SocketProvider';
import { DisplayGesture } from './DisplayGesture';
import { DrawGesture } from './DrawGesture';

export const GestureRecognition = () => {
  const socket = useSocket();
  const cameraRef = useRef();

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        console.log('Connected to server');
      });

      socket.on('start-transmission', () => {
        console.log('sending video...');
        socket.emit('process-input', null);
      });
    }
  }, [socket]);

  // Insert view pages inside
  return (
    <div>
      <DisplayGesture />
      <DrawGesture />
    </div>
  );
};
