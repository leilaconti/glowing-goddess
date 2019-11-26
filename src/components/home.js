import React from 'react'
import './style.css'
import logo from './images/logo.png'
import facebook from './images/facebook.png'
import instagram from './images/instagram.png'
import snapchat from './images/snapchat.png'
import hair from './images/hair.jpg'
import skin from './images/skin.jpg'
import makeup from './images/makeup.jpg'
import background from './images/background.jpg'
import { Link } from 'react-router-dom'
import Contact from './contact';
import About from './about';
import NavBar from './navbar'

export default class Home extends React.Component {
	render() {
	  return (
		<div>	
			<NavBar />
			<br></br><br></br>
			<div align="center" class="container">
				<div class="card">
					<div class="container">
						<img height={440} src={makeup} alt="makeup" />
						<br></br>
						<h4><b>Makeup 💄</b></h4>
					</div>
				</div>

				<div class="card">
					<div class="container">
						<img height={440} src={skin} alt="skin" />
						<h4><b>Skincare 💅🏼</b></h4>
					</div>
				</div>

				<div class="card">
					<div class="container">
						<img height={440} src={hair} alt="hair" />
						<h4><b>Hair 💇🏼</b></h4>
					</div>
				</div>

			</div>
		</div>
	  );
	}
  }