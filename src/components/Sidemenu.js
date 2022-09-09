import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Sidemenu.css'
import {FaBars, FaHome,FaRegTimesCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'
function Sidemenu() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <Button className='menu-btn' onMouseEnter={handleShow}>
        <FaBars />Categories
      </Button>

      <Offcanvas show={show} onMouseLeave={handleClose}>
       
          <Offcanvas.Title></Offcanvas.Title>
       
        <Offcanvas.Body>
         <ul className='categories-menu'>
            <h3>Cars</h3>
            <li onClick={handleClose} className='categories-list'><FaRegTimesCircle/>close</li>
            <Link to="/"><li onClick={handleClose} className='categories-list'><FaHome/>Home</li></Link>
            <Link to="/"><li  className='categories-list'>Benz Mercedes</li></Link>
            <Link to="/"> <li  className='categories-list'>Toyota</li></Link>
            <Link to="/"><li  className='categories-list'>Hyundai</li> </Link>
            <Link to="/"> <li  className='categories-list'>Mitsubishi</li></Link>
            <Link to="/"> <li  className='categories-list'>KIA</li></Link>

            <h3>Cottages</h3>

            <Link to="/"> <li  className='categories-list'>Family house</li></Link>
            <Link to="/">  <li  className='categories-list'>Individual</li></Link>
            <Link to="/"> <li  className='categories-list'>Vacation</li></Link>
            <Link to="/"><li  className='categories-list'>Honeymoon</li></Link>
            
         </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Sidemenu