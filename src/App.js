import React, { useRef, useState, useEffect } from 'react';
import Webcam from 'react-webcam';

import * as gs from './assets/hand-gestures-icons';
import { SocketProvider } from './contexts/SocketProvider';
import { v4 as uuidV4 } from 'uuid';
import useLocalStorage from './hooks/useLocalStorage';
import { GestureProvider } from './contexts/GestureProvider';
import { GestureRecognition } from './components/GestureRecognition';
import { DisplayGesture } from './components/DisplayGesture';

// import "./App.css";

function App() {
  const [id, setId] = useLocalStorage('id');

  if (!id) {
    setId(uuidV4());
  }

  return (
    <SocketProvider id={id}>
      <GestureProvider>
        <GestureRecognition />
      </GestureProvider>
    </SocketProvider>
  );
}

export default App;
