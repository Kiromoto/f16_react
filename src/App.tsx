import React, {Fragment} from 'react';
import './styles/App.css';
import Main from './Main';
import Header from  './Header';


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
