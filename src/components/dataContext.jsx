import React, { createContext, useEffect, useState } from 'react';
import {Cookies, useCookies, withCookies} from 'react-cookie';

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState('');
  const [cookies] = useCookies(['access_token']);

  useEffect(() => {
    const storedToken = cookies['access_token'];
    if (storedToken) {
      setData(storedToken);
    }
  }, [cookies]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};