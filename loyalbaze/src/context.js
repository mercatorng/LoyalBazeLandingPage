import React, { useContext, useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [openMessage, setOpenMessage] = useState(false);

  const messageOpen = () => {
    setOpenMessage(true);
  };
  const messageClose = () => {
    setOpenMessage(false);
  };

  return (
    <AppContext.Provider value={{ openMessage, messageOpen, messageClose }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
