import React, { useEffect } from 'react';
import './App.css';
import { HomePage } from './components/Home/HomePage';
import { Navbar } from './layouts/NavbarAndFooter/Navbar';
import { Footer } from './layouts/NavbarAndFooter/Footer';
import { SearchBooksPage } from './components/SearchBook/SearchBooksPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BookCheckoutPage } from './components/BooksCheckOut/BookCheckoutPage';
import  FireBaseLogin  from './components/Auth/firebaseLogin';
import  FirebaseReset  from  './components/Auth/firebaseReset';
import FirebaseRegister from './components/Auth/firebaseRegister';


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
      <Route exact path="/login" component={FireBaseLogin} />
      <Route exact path="/register" component={FirebaseRegister} />
      <Route exact path='/reset' component={FirebaseReset}/>
      </Switch>
     </div>
      <Footer/>
    </div>
  );
}

export default App;
