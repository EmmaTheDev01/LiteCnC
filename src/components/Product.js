import React, { Component } from 'react';
import './Carousel.css'
import {Link} from 'react-router-dom';
import { ProductConsumer } from '../Context';
import PropTypes from 'prop-types';
import {FaHeart, FaRegHeart} from 'react-icons/fa'
import { propTypes } from 'react-bootstrap/esm/Image';
class Product extends Component {
    render() {
       const {id,title,img,price,inCart,category} = this.props.product;
        return (
            

            <div className="product col-10 mx-auto col-md-6 col-lg-3 my-3">
                <ProductConsumer>
                    {value => (
                        <div className="card" onClick={()=>{value.handleDetail(id)}}>
                            <Link to="/details">
                                <div className="card-image rounded">
                                    <img src={img} alt="Product" className="card-img-top p-5" />
                                </div>
                            </Link>
                            {/* BODY CARD. Card indicating all product cards */}
                            <div className="card-body">
                                <h5 className="card-title title">{title}</h5>
                                <div className="d-flex justify-content-between">
                                    <p className="card-text price text-success">Rwf. {price}</p>
                                   
                                </div>
                            </div>
                           
                           
                            <p className="prod-actions" disabled={inCart ? true : false}
                                onClick={() => {
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}
                            >
                            {/* if ELSE This is what to do when a product is  already selected*/}
                            {inCart ? (
                                <p className="text-capitalize mb-0" disabled>{""}<span className='like-clicked'><FaHeart /></span></p>
                            ):(
                                
                                <button className='like'><FaRegHeart /></button>
                               
                            )}
                            </p>
                        </div>
                    )}
                </ProductConsumer>
            </div>
        );
                            
    }
}

export default Product;

// PropTypes berfungsi memfilter tipe data dari tiap2 data props atau variabel yang masuk
Product.propTypes = {
    product : PropTypes.shape({
        id : PropTypes.number,
        img : PropTypes.string,
        title : PropTypes.string,
        price : PropTypes.number,
        inCart : PropTypes.bool,
        category: propTypes.string,
    }).isRequired
};
// const 