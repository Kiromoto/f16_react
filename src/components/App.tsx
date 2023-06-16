import React, {Fragment, useState} from 'react';
import {createContext} from 'react'
import './App.Module.scss';
import Main from './Main/Main';
import Header from './Header/Header';

export const Context:any = createContext(null);

function App() {
    const [test, setTest] = useState('String from App.tsx! Text!')

  return (
    <Context.Provider value={{test, setTest}}>
        <div className="App">
            <Header/>
            <Main/>
        </div>
    </Context.Provider>
  );
}

export default App;
