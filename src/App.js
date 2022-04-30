import React , { Component } from 'react';
import {BrowserRouter ,Route , Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/navbar';
import Index from './components/index';
import Contact from './components/Contact/contact';




class App extends Component {
 render() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<Index />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
 }
}

export default App;
