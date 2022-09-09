import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import './signup.css'
import {Link} from 'react-router-dom'
function SignIn() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <li variant="primary" onClick={handleShow}>
        Sign up
      </li>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
         
        </Modal.Header>
        <Modal.Body>
        <form>
        <div class="form">
        <center><h3 className='signup-header'>Sign up here</h3></center>
        <div className='signup-input'>
        <input class=" look" type="text" placeholder="Enter your name" required/>
        <input class="look" type="text" placeholder="Enter your last name" />
       <input class="look" type="email" placeholder="Email address" required/>
         <input class="look" type="text" placeholder="Phone number" required />
          <input class="look" type="password" placeholder="Create password" required />
        <input class="look" type="password" placeholder="Confirm Password" required />  
        </div>
       <div class="bottom-line">
       <span class="checkbox-content">
       <input class="checkbox" type="checkbox" name="verify" value="" />
       <label class="check-label" for="verify">Agree with our <Link to="/tandc">terms</Link> and <Link to="/tandc">conditions</Link></label>
      </span>
      <input type="submit" class="signup-btn" value="Get started" />
         
      </div>
      

  </div>
  </form>

        </Modal.Body>
       
      </Modal>

    </div>
  )
}

export default SignIn