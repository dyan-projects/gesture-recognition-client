import React, { useContext, useReducer } from 'react';

const GestureContext = React.createContext();

export const useGesture = () => {
  return useContext(GestureContext);
};

const reducer = (state, action) => {};

export const GestureProvider = ({ children }) => {
  const [detectedGesture, dispatch] = useReducer(reducer, []);
  const gestureDetected = '';
  const toggleDisplay = () => {};
  return (
    <GestureContext.Provider value={{ gestureDetected, toggleDisplay }}>{children}</GestureContext.Provider>
  );
};
