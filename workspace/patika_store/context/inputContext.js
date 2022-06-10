import {createContext, useContext, useState} from 'react';
import React from 'react';
const InputContext = createContext('');
const useInput = () => useContext(InputContext);

const InputProvider = ({children}) => {
  const [input, setInput] = useState('');
  const [filtered, setFiltered] = useState([]);
  const values = {input, setInput, filtered, setFiltered};
  return (
    <InputContext.Provider value={values}>{children}</InputContext.Provider>
  );
};

export {InputProvider, useInput};
