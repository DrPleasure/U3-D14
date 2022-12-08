import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FetchComponent from './components/FetchComponent'
import ArticleDetails from './components/ArticleDetails';
import Jumbotrono from './components/Jumbotrono';



function App() {
  return (
    
    
    <div className="App">
      <Jumbotrono/>
      <header className="App-header">
      
        <FetchComponent/>
        {/* <Route path='/ArticleDetails' element={<ArticleDetails />} /> */}
       
    <ArticleDetails/>
       
       
      </header>
    </div>
    
  );
}

export default App;
