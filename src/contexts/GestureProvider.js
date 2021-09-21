import React, { useContext, useEffect, useRef } from 'react';
import { useSocket } from './SocketProvider';

const GestureContext = React.createContext();

export const useGesture = () => {
  return useContext(GestureContext);
};

const GestureProvider = ({ children }) => {
  const socket = useSocket();
  const results = useRef();

  useEffect(() => {
    if (socket) {
      socket.on('connect', () => {
        console.info('Connected to server');
      });

      socket.on('results', input => {
        results.current = input;
        console.log(results.current);
      });

      socket.on('disconnect', () => {
        console.info('Server disconnected');
      });
    }
  }, [socket]);

  return <GestureContext.Provider value={{ results }}>{children}</GestureContext.Provider>;
};

export default GestureProvider;
