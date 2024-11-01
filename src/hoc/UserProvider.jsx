/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */

import { createContext, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const signin = (newUser, callBack) => {
    setUser(newUser);
    callBack();
  };

  const signout = (callBack) => {
    setUser({});
    callBack();
  };

  const value = {
    user,
    signin,
    signout,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
