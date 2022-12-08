import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchComponent from './components/FetchComponent'



function App() {
  return (
    <div className="App">
      <header className="App-header">
     
       <FetchComponent/>
    
      </header>
    </div>
  );
}

export default App;
