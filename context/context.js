import React, { useContext, useState } from 'react';

const RestContext = React.createContext();

const RestProvider = ({ children }) => {
  const [showNav, setShowNav] = useState(false);
  const [timer, setTimer] = useState(0);

  return (
    <RestContext.Provider
      value={{
        showNav,
        setShowNav,
        timer,
        setTimer,
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
