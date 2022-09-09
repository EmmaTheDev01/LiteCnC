import React from 'react'
import { FaEnvelope, FaPhoneAlt, FaSearch, FaMapMarkerAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../css/App.css';
import Logo from '../Logo icon.png';
import UserActions from './UserActions';
function TopNav() {
  return (
    <div className='topnav'>
        <ul className='topmenu'>
            <li className='option-user'><UserActions /></li>
            <a href="mailto:worldoffictionrw@gmail.com"
            ><li  className='option'><FaEnvelope />worldoffictionrw@gmail.com</li></a>
            <a target="_blank" href="https://www.google.com/maps/place/ICT+Innovation+Center/@-1.9769416,30.1053252,15z/data=!4m5!3m4!1s0x0:0x7d9cd4ddcbefe8bc!8m2!3d-1.9769416!4d30.1053252">
                <li  className='option'><FaMapMarkerAlt />Locate us</li></a>
            <a href="tel:0784019175"><li  className='option'><FaPhoneAlt/>+250784019175</li></a>
            <li className='option-srch'>
                <input className='srch-field' type="text" name="search-text" placeholder='search...' />
                <button className='btn-srch'><FaSearch /></button>
            </li>
           <Link to="/"> <li className='option-logo'><img src={Logo} height="80px" /></li></Link>
        </ul>
    </div>
  )
}

export default TopNav