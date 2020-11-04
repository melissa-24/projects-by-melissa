import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './css/core.css'

import NavBar from './components/nav/NavBar'
import NavSmall from './components/nav/NavSmall'

import Home from './components/Home'
import FrontEnd from './components/FrontEnd'
import BackEnd from './components/BackEnd'
import FullStack from './components/FullStack'
import Organization from './components/Organizations'

const App = () => {
  return (
    <>
    <header>
      <h1>Melissa's Projects</h1>
      <nav>
        <NavBar />
        <NavSmall />
      </nav>
    </header>
     <Switch>
       <Route path='/Front End'>
         <FrontEnd />
       </Route>
       <Route path='/Back End'>
        <BackEnd />
       </Route>
       <Route path='/Full Stack'>
         <FullStack />
       </Route>
       <Route path='/Organization'>
         <Organization />
       </Route>
       <Route exact path='/'>
        <Home />
       </Route>
     </Switch>
    </>
  );
};

export default App;