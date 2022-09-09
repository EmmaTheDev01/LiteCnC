import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import './Pages.css'
import { Link } from 'react-router-dom';

function Cottages() {
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
      onMouseEnter={handleClick} onMouseLeave={handleClose}>Cottages
    
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
                 <Link to="/allcottages"> <li className='user-list'>Private Cottages</li></Link>
                 <Link to="allcottages"><li className='user-list'>Shared Cottages</li></Link>
                 <Link to="/rentcottage"><li className='user-list'>Rent/Sell your house</li></Link>
                 
            </ul>
          </Popover.Body>
        </Popover>
      </Overlay>
      </li>
    </div>
    </div>
  )
}

export default Cottages