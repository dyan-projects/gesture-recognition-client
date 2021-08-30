import React, { useContext, useReducer, useRef } from 'react';

const GestureContext = React.createContext();

export const useGesture = () => {
  return useContext(GestureContext);
};

const reducer = (state, action) => {};

const GestureProvider = ({ children }) => {
  const results = useRef();
  const [detectedGesture, dispatch] = useReducer(reducer, []);
  console.log(detectedGesture, dispatch);

  const toggleDisplay = () => {};
  return <GestureContext.Provider value={{ results, toggleDisplay }}>{children}</GestureContext.Provider>;
};

export default GestureProvider;
