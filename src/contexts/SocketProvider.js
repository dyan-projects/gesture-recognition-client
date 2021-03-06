import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const { REACT_APP_SERVER_URL } = process.env;

const SocketContext = React.createContext();

export const useSocket = () => {
  return useContext(SocketContext);
};

export const SocketProvider = ({ id, children }) => {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io(REACT_APP_SERVER_URL, { query: { id } });
    setSocket(newSocket);

    return () => newSocket.close();
  }, [id]);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};
