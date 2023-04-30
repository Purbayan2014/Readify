import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './components/Home/ExploreTopBooks';
import { Carousel } from './components/Home/Carousel';
import { Heros } from './components/Home/Heros';


function App() {
  return (
    <>
    <Navbar />
    <ExploreTopBooks />
    <Carousel />
    <Heros />
    </>
  );
}

export default App;
