import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.scss'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'

const App = () => {

  return (

      <Router>

        <Navbar/>

        <main>

          <Switch>

            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/contact' component={Contact}/>
          
          </Switch>

        </main>

        <Footer/>

      </Router>
  );
}

export default App;
