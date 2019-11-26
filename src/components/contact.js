import React from 'react'
import './contact.css'
import logo from './images/logo.png'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import snapchat from './images/snapchat.png'
import NavBar from './navbar'

const Contact = () => (
	<div>
		  <NavBar />
		  <div className="centerStuff">
		  Add me on any of my social media! 📱 <br></br>
		  <a href="https://www.facebook.com/leila.conti.7"><img height={60} src={facebook} alt="Facebook" /></a>
		  <a href="https://www.instagram.com/lcxnti/"><img height={60} src={instagram} alt="Instagram" /></a>
		  <a href={snapchat}><img height={60} src={snapchat} alt="Snapchat" /></a>
		  </div>
	</div>
  );

  export default Contact;