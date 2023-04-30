import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './components/Home/ExploreTopBooks';
import { Carousel } from './components/Home/Carousel';
import { Heros } from './components/Home/Heros';
import { LibraryServices } from './components/Home/LibraryServices';
import { Footer } from './components/Home/Footer';


function App() {
  return (
    <>
    <Navbar />
    <ExploreTopBooks />
    <Carousel />
    <Heros />
    <LibraryServices />
    <Footer/>
    </>
  );
}

export default App;
