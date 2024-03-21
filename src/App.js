
import './App.css';
import Date from './Modules/Intelligence/components/Date/Date';



import Header from './core/components/Header/Header';
import LandingPage from './core/components/LandingPage/LandingPage';
import PieChart from './Modules/Intelligence/components/PieChart/PieChart';
import SelectSmall from './core/components/Support/Support';
import TileMetrixCard from './Modules/Intelligence/components/MetrixCard/MetrixCard';
import React, { useState } from 'react';
//routing
import {BrowserRouter} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import Tile from './Modules/Intelligence/components/Tile/Tile';

function App() {

  return (
    <div className="App">
<BrowserRouter>
    <Routes>
        <Route path='' element={<LandingPage />}/>
        <Route path='tile' element={<Tile/>}/>
    </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
