import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './components/Home/ExploreTopBooks';
import { Carousel } from './components/Home/Carousel';


function App() {
  return (
    <>
    <Navbar />
    <ExploreTopBooks />
    <Carousel />
    </>
  );
}

export default App;
