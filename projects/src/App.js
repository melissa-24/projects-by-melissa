import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './css/core.css'

import NavBar from './components/nav/NavBar'
import NavSmall from './components/nav/NavSmall'

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
       <Route path='/Current Projects'>

       </Route>
       <Route path='/Old Projects'>

       </Route>
       <Route exact path='/'>

       </Route>
     </Switch>
    </>
  );
};

export default App;