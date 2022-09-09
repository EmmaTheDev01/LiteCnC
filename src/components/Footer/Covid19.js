import React,{useState} from 'react'
import Modal from 'react-bootstrap/Modal';
function Covid19() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        <li variant="primary" onClick={handleShow}>
       Covid-19
      </li>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
        
        </Modal.Header>
        <Modal.Body>
            
                <center>
                    <div className='container'>
                        <div className='signin-header'>
                            <h3>Covid-19 Prevention and Fighting</h3>
                        </div>
                        
                           <h5>Here is our covid 19 incident responce plan</h5>
                           <br />
                           <p>Due to covid 19, all customers must wash their hands and must have all required dozes in order to have access to any of the properties
                            published here.
                           </p>
                        
                    </div>
                    </center>
               

        </Modal.Body>
       
      </Modal>

    </div>
  )
}

export default Covid19