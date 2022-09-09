import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import './Pages.css'
import { Link } from 'react-router-dom';

function Cars() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const handleClose = (event) => setShow(false);
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  
  return (
    <div>
        <div ref={ref}>
      <li className='nav-services' 
      onMouseEnter={handleClick} onMouseLeave={handleClose}>Cars
    
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained user">
          <Popover.Header as="h3"></Popover.Header>
          <Popover.Body>
            <ul className='user-menu'>
                 <Link to="CarRental"> <li className='user-list'>Self Drive</li></Link>
                 <Link to="CarRental"><li className='user-list'>Car with driver</li></Link>
                 <Link to="/rentorsellcars"><li className='user-list'>Buy/Sell or rent</li></Link>
                 
            </ul>
          </Popover.Body>
        </Popover>
      </Overlay>
      </li>
    </div>

    </div>
  )
}

export default Cars