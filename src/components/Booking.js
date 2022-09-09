
import React, {Component} from "react";
import Product from './Product';
import Title from './Title';
import {ProductConsumer} from '../Context';
import './Booking.css'
class Booking extends Component{
  render(){
    return(
      <div>
             <div className="py-5">
                    <div className="container-booking">
                      
                        <h2 className="head-prod">Book here</h2>
                        <div className="row justify-content-center products-container">

                           
                            <ProductConsumer>
                             
                                {value => {
                                  
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product}/>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
      </div>
    );
  }

}
export default Booking;