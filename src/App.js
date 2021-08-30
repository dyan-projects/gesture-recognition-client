import React from 'react';
import { v4 as uuidV4 } from 'uuid';

import useLocalStorage from './hooks/useLocalStorage';
import { SocketProvider } from './contexts/SocketProvider';
import GestureProvider from './contexts/GestureProvider';
import ViewsContainer from './components/ViewsContainer';

import './App.css';

const App = () => {
  const [id, setId] = useLocalStorage('id');

  if (!id) {
    setId(uuidV4());
  }

  return (
    <>
      <SocketProvider id={id}>
        <GestureProvider>
          <ViewsContainer />
        </GestureProvider>
      </SocketProvider>
    </>
  );
};

export default App;
