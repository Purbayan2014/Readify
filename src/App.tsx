import React from 'react';
import './App.css';
import { HomePage } from './components/Home/HomePage';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './components/Home/components/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <HomePage/>
      <Footer/>
    </>
  );
}

export default App;
