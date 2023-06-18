import React, {useState} from 'react';
import {createContext} from 'react'
import './App.Module.scss';
import Main from './Main/Main';
import Header from './Header/Header';

export const Context: any = createContext(null);

function App() {
    const [city, setCity] = useState({});
    const [data, setData] = useState({});
    return (
        <Context.Provider value={{city, setCity, data, setData}}>
            <div className="App">
                <Header/>
                <Main/>
            </div>
        </Context.Provider>
    );
}

export default App;
