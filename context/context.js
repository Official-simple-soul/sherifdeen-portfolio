import React, { useContext, useState } from 'react';

const RestContext = React.createContext();

const RestProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const [timer, setTimer] = useState(0);
  const [light, setLight] = useState(false);
  return (
    <RestContext.Provider
      value={{
        showNav,
        setShowNav,
        timer,
        setTimer,
        light,
        setLight,
      }}
    >
      {children}
    </RestContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(RestContext);
};

export { useGlobalContext, RestProvider };
