/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const signin = (newUser, callBack) => {
    callBack();
  };

  const signout = (callBack) => {
    callBack();
  };

  const value = {
    signin,
    signout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
