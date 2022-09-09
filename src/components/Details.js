import React, { Component } from 'react';
import { ProductConsumer } from '../Context';
import {Link} from 'react-router-dom';
import {FaTimes,FaPlus} from 'react-icons/fa'
import './Carousel.css'
class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id,company, img, info, price, title, inCart} = value.detailProduct;
                    return (
                        <div className="container py-5 details">
                            <div className="row justify-content-center">
                                <div className="col-10 col-md-6 my-3 text-center">
                                    <img src={img} alt="product" className="img-fluid" />
                                </div>
                                <div className="head-details">
                                    <h1 className='head-details-name'>{title}</h1>
                                    <h4 className="text-uppercase text-muted mt-2 mb-1"> By <span>{company}</span></h4>
                                    <p className="text-success"><strong>Rwf. {price}</strong></p>
                                    <hr />
                                    <p className="text-capitalize description">Description</p>
                                    <p className="text-dark">
                                        {info}
                                    </p>
                                    <hr />
                                    <div>
                                        <Link to='/booking'>
                                            <button type="button" className="btn btn-secondary btn-sm"><FaTimes/></button>
                                        </Link>
                                        <button type="button" className="btn text-yellow btn-sm ms-2"
                                        cart 
                                        disabled = {inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                        >{inCart ?  <FaPlus/> : <FaPlus/>}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;