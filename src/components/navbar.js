import React from 'react'
import './navbar.css'
import logo from './images/logo.png'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import snapchat from './images/snapchat.png'
import Contact from './contact';
import About from './about'
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const NavBar = () => (
  <div>
		<div class="on-the-left" ><pre class="tab"><a href="/">Home</a>      <a href="/about">About Me</a>       <a href="/contact">Contact</a></pre></div>
		<div class="on-the-center" > <img src={logo} alt="Logo" /> </div>
  </div>
);

export default NavBar;