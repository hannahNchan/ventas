import React from 'react';
import logo from './logo.svg';
import NavBar from './containers/Sidebar/NavBar';
import HeaderBar from './containers/HeaderBar/HeaderBar';
import './App.css';
import { initializeIcons } from '@uifabric/icons';

initializeIcons();

function App() {
  return (
    <div className="App">
      <div className="ms-Grid" dir="ltr">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col"><NavBar /></div>
          <div className="ms-Grid-col ms-sm6 ms-md6 ms-lg6"><HeaderBar /></div>
        </div>
      </div>
    </div>
  );
}

export default App;
