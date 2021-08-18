import React from 'react';
import { SocketProvider } from './contexts/SocketProvider';
import { v4 as uuidV4 } from 'uuid';
import useLocalStorage from './hooks/useLocalStorage';
import { GestureProvider } from './contexts/GestureProvider';
import { GestureRecognition } from './components/GestureRecognition';
import { FirstView } from './components/FirstView';
import { AdsView } from './components/AdsView';

import './App.css';

function App() {
  const [id, setId] = useLocalStorage('id');

  if (!id) {
    setId(uuidV4());
  }

  return (
    <div>
      <SocketProvider id={id}>
        <GestureProvider>
          <GestureRecognition />
          <FirstView />
          <AdsView />
        </GestureProvider>
      </SocketProvider>
    </div>
  );
}

export default App;
