import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Footer.css'
import More from './more';
class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                
                <div className="container-fluid text-center pb-5">
                <hr className="my-5" />

                <small className="text-muted copyright">All rights reserved © <strong>LiteCnC</strong>2022
                     </small>   
                     <ul className='footer-list text-muted'>
                     <li className='list-footer color'><More/></li>
                        <Link><li className='list-footer'>Our Services</li></Link>
                        <Link><li className='list-footer'>Partners</li></Link>
                        <Link><li className='list-footer'>User regulations</li></Link>
                        <Link><li className='list-footer'>Terms</li></Link>
                        <Link><li className='list-footer'>Conditions</li></Link>
                        <Link><li className='list-footer'>Privacy policy</li></Link>
                        
           
                     </ul>
               
            </div>
            </div>
            
        );
    }
}

export default Footer;