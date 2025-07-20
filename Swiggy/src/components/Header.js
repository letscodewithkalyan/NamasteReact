import React from 'react'
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className='logo-container'>
             <img src={LOGO_URL} className='logo'/>
        </div>
        <div className='nav-container'>
            <ul>
                <li>
                     <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to='/About'>About</Link>
                </li>
                <li>
                    <Link to="/ContactUs">Contact US</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header