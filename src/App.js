import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/home';
import Contact from './components/contact';
import About from './components/about';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

function App() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/contact" component={Contact} />
            <Route path='/about' component={About} />
          </div>
      </Router>
      </div>
  );
}

export default App;
