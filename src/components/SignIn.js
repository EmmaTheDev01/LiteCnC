import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import './signin.css'
import {Link} from 'react-router-dom'
function SignIn() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <li variant="primary" onClick={handleShow}>
        Sign in
      </li>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body>
            <form>
            <form>
                <center>
                    <div className='signin-container'>
                        <div className='signin-header'>
                            <h3>Login here</h3>
                        </div>
                        
                            <div className='signin-input'>
                                <input class="username" type="email" placeholder="Enter your email address"></input>
                                <input class="pwd" type="password" placeholder="Enter your password"></input>
                            </div>
                            <div className='verification'>
                                <p>LiteC&C is a business with values and is built with integrity. If tou violate any of our code of conduct, you will be held as illegal user.
                                    You must agre with our policies and by signing in, you agree that your provided data are correct.
                                </p>
                            </div>
                            
                              <input class="check-box" type="checkbox" name="verify" value=""></input>
                              <span class="check-text" >Agree with our <Link to="/tandc">terms</Link> and <Link to="/tandc">conditions</Link></span>
                                <button className='signinbutton'>Login</button>
                               
                            <br />
                        
                    </div>
                    </center>
                </form>
            </form>

        </Modal.Body>
       
      </Modal>

    </div>
  )
}

export default SignIn