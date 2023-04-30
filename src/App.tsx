import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './components/Home/ExploreTopBooks';
import { Carousel } from './components/Home/Carousel';
import { Heros } from './components/Home/Heros';
import { LibraryServices } from './components/Home/LibraryServices';


function App() {
  return (
    <>
    <Navbar />
    <ExploreTopBooks />
    <Carousel />
    <Heros />
    <LibraryServices />
    </>
  );
}

export default App;
