import React, { useContext } from 'react';
import './App.css';
import Forms from './Forms';
import Squares from './Squares';
import { DataProvider, DataContext } from './DataContext';

function App() {
  // const { resetGrid } = useContext(DataContext);

  return (
    <DataProvider>
      <header className="App-header">入れ替えくん</header>
      <div className="grid-container">
        <Squares />
      </div>
      {/* <button className="reset-button" onClick={() => resetGrid()}>リセット</button> */}
      <Forms />
    </DataProvider>
  );
}

export default App;
