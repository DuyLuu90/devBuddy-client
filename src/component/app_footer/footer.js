import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon}  from '@fortawesome/react-fontawesome'
import './footer-style.css'

export default class Footer extends Component{
    render(){
        return (
            <footer className='app_footer'> 
                <div>
                    <FontAwesomeIcon className='icon' icon='copyright'/>
                    <span>{' '}Duy Luu</span>
                </div>
                <Link to='myCalories2020@gmail.com'aria-label='email'><FontAwesomeIcon className='icon' icon='envelope'/>
                            {' '}{' '}EMAIL ME
                </Link>   
            </footer>
        )
    }
}