import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Sidemenu.css'
import {FaAngleUp} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import Covid19 from './Footer/Covid19';
function Sidemenu() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <p className='more' onClick={handleShow}>
        More<FaAngleUp />
      </p>

      <Offcanvas show={show} onMouseLeave={handleClose} placement="bottom">
       
          <Offcanvas.Title></Offcanvas.Title>
       
        <Offcanvas.Body>
        <ul className='more-list'>
            <Link to="/contact"><li className='text-muted list-more-menu'>Contact Us</li></Link>
            <Link to="/services"> <li className='text-muted list-more-menu'>Services</li></Link>
            <Link to="/about"><li className='text-muted list-more-menu'>About us</li></Link>
            <Link to="/brands"><li className='text-muted list-more-menu'>Brands</li></Link>
            <Link to="/partners"><li className='text-muted list-more-menu'>Our Partners</li></Link>
            <Link to="/support"><li className='text-muted list-more-menu'>Support</li></Link>
            <Link to=""><li className='text-muted list-more-menu'>User requirements</li></Link>
            <Link to="/faq"><li className='text-muted list-more-menu'>FAQ</li></Link>
            <Link to="/countries"><li className='text-muted list-more-menu'>Countries</li></Link>
            <Link to="/restrictions"><li className='text-muted list-more-menu'>Restrictons</li></Link>
            <Link to="/terms"><li className='text-muted list-more-menu'>Terns&Conditions</li></Link>
            <Link to="/policies"><li className='text-muted list-more-menu'>Policies</li></Link>
            <Link to="/policies"><li className='text-muted list-more-menu'>Privacy</li></Link>
            <Link to="/topics"><li className='text-muted list-more-menu'>Topics</li> </Link>
            <Link to=""><li className='text-muted list-more-menu'>Newsroom</li></Link>
            <Link to=""><li className='text-muted list-more-menu'><Covid19 /></li></Link>
            <Link to="/careers"><li className='text-muted list-more-menu'>Careers</li></Link>
            <Link to="/litecnc"><li className='text-muted list-more-menu'>LiteCnC</li></Link>
            <Link to="/agent"><li className='text-muted list-more-menu'> Become Our agent</li></Link>
            <Link to="/host"><li className='text-muted list-more-menu'>Become a Host</li></Link>
            <Link to="/report"><li className='text-muted list-more-menu'>Report here</li></Link>
            <Link to="/incidentresponse"><li className='text-muted list-more-menu'>Incident Response</li></Link>
            <Link to="/team"><li className='text-muted list-more-menu'>Our team</li></Link>
           
        </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Sidemenu