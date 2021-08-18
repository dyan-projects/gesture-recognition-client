import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import { useSocket } from '../contexts/SocketProvider';
import { DisplayGesture } from './DisplayGesture';
import { DrawGesture } from './DrawGesture';

export const GestureRecognition = () => {
  const socket = useSocket();
  const videoRef = useRef(null);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 300 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error('error:', err);
      });
  };

  useEffect(() => {
    // getVideo();
  }, []);

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
      <video ref={videoRef} />
      <DisplayGesture />
      <DrawGesture />
    </div>
  );
};
