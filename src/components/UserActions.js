import React, { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';
import './UserActions.css'
import {FaUser} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
function UserActions() {
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
      <Button className='user-btn' 
      onMouseEnter={handleClick} onMouseLeave={handleClose}><FaUser />
    
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
        <Popover id="popover-contained user">
          <Popover.Header as="h3" className='usr'>Username</Popover.Header>
          <Popover.Body>
            <ul className='user-menu'>
                 <Link to=""> <li className='user-list'>Edit Profile</li></Link>
                 <Link to=""><li className='user-list'><SignIn /></li></Link>
                 <Link to=""><li className='user-list'><SignUp/></li></Link>
                 
            </ul>
          </Popover.Body>
        </Popover>
      </Overlay>
      </Button>
    </div>

    </div>
  )
}

export default UserActions