//import { render } from 'enzyme';
import React from 'react';
import './landing.css'
import AI from '../../assets/AI.png'

export default class LandingPage extends React.Component {
	render() {
		return (
			<div id='landing'>
				<h1>WELCOME</h1>
                <div>
                    <img src={AI} alt='AI'/>
                </div>
      		</div>
		)
	}
}

