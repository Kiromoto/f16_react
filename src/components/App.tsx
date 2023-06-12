import React, {Fragment} from 'react';
import './App.Module.scss';
import Main from './Main/Main';
import Header from './Header/Header';


function App() {
  return (
    <Fragment>
        <div className="App">
            <Header/>
            <Main/>
        </div>
    </Fragment>
  );
}

export default App;
