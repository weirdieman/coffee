import React from 'react'
import Header from './components/header'
import Home from './pages/home/home'
import { Route } from 'react-router-dom';
import Footer from './components/footer'

import './App.scss'

function App() {
  return (
    <React.Fragment>
     <Header/> 
     <Route exact path='/' component={Home} />
     <Footer/>
    </React.Fragment>
  );
}

export default App;
