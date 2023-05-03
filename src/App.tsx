import React from 'react';
import './App.css';
import { HomePage } from './components/Home/HomePage';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './components/Home/components/Footer';
import { SearchBooksPage } from './components/SearchBook/SearchBooksPage';


function App() {
  return (
    <>
      <Navbar/>
      {/* <HomePage/> */}
      <SearchBooksPage/>
      <Footer/>
    </>
  );
}

export default App;
