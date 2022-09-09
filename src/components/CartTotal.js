import React from 'react';
import { Link } from 'react-router-dom';
export default function CartColumn({value}) {
   
    const {cartSubtotal,cartTax,cartTotal,clearCart} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-10 mt-2 ms-sm-5  col-sm-8 text-capitalize text-end">
                        <Link to='/'>
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>Clear Cart</button>
                        </Link>
                        <p>
                            <span className="col-10 mx-auto col-lg-2">subtotal</span>&nbsp;
                            <span className='text-success'>{cartSubtotal} Rwf</span>
                        </p>
                        <p>
                            <span className="col-10 mx-auto col-lg-2">tax</span>&nbsp;
                            <span  className="text-success">{cartTax} Rwf</span>
                        </p>
                        <p>
                            <span className="col-10 mx-auto col-lg-2">total</span>&nbsp;
                            <span className='text-success'>{cartTotal} Rwf</span>
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}