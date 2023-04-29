import React from 'react';
import './App.css';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { ExploreTopBooks } from './components/Home/ExploreTopBooks';


function App() {
  return (
    <>
    <Navbar />
    <ExploreTopBooks />
    </>
  );
}

export default App;
