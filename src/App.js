import './scss/index.scss'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CardDetails from "./CardDetails";
import Main from "./Main";
import { useState, useEffect } from 'react';
import useDarkMode from './hooks/useDarkMode';

function App() {
    const [darkMode,toggleDarkMode] = useDarkMode()
  return (
    <BrowserRouter>
        <div className="app__top">
          <h1>Where in the world?</h1>
          <button onClick={()=>toggleDarkMode()}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
        </div>
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path="country/:countryName" element={<CardDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
