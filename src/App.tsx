import React from 'react';
import './App.css';
import { HomePage } from './components/Home/HomePage';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { SearchBooksPage } from './components/SearchBook/SearchBooksPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BookCheckoutPage } from './components/BooksCheckOut/BookCheckoutPage';


function App() {
  return (
    <div className='d-flex flex-column min-vh-100'>
     <Navbar/>
     <div className='flex-grow-1'>
      <Switch>
      <Route path='/' exact>
        <Redirect to='/home' />
      </Route>
      <Route path='/home'>
        <HomePage/>
      </Route>
      <Route path='/search'>
        <SearchBooksPage/>
      </Route>
      <Route path='/checkout'>
        <BookCheckoutPage/>
      </Route>
      </Switch>
     </div>
      <Footer/>
    </div>
  );
}

export default App;
