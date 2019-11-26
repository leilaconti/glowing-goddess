import React from 'react'
import './about.css';
import NavBar from './navbar';

export default class About extends React.Component {
	render() {
	  return (
		<div>	
			<NavBar />
			<p>Hey, welcome to my beauty blog 💖! My name is Leila and I'm 21 years old. I have
				gathered some of my favourite beauty products to share with you guys 💄. 
			</p>
		</div>
	  );
	}
}