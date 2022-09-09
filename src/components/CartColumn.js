import React from 'react';
import './Cart.css'
export default function CartColumn() {
    return (
        <div>
            <div className="container-fluid text-center d-none d-lg-block">
                <div className="row">
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="title-cart">Products</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="title-cart">Products Name</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="title-cart">Price</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="title-cart">Qtt</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="title-cart">Remove</p>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className="title-cart">Total</p>
                    </div>
                </div>
            </div>
        </div>
    );
}