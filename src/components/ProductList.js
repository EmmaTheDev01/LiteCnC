import React, { Component } from 'react';
import {Helmet} from 'react-helmet';
import Image1 from '../products/18.jpg'
import Image3 from '../products/19.jpg'
import Image2 from '../products/25.jpg'
import Image4 from '../products/68.jpg'
import Image5 from '../products/20.jpg'
import Image6 from '../products/70.jpg'
import Image7 from '../products/67.jpg'
import Carousel from 'react-bootstrap/Carousel';
import Product from './Product';
import ad from './ad.png'
import {ProductConsumer} from '../Context';
import './Carousel.css';
import { Link } from 'react-router-dom';
const title = 'LiteCnC';
class ProductList extends Component {
    render() {
        return (
            <React.Fragment>
                
            <Helmet>
                <title>LiteCnC</title>
            </Helmet>
                {/* Carousel or slide */}
                <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First slide"
        />
        <Carousel.Caption>
           <div  className='ccaption'>
          <h1 className='head-title'>Self Drive cars</h1>
          <p  className='carousel-paragraph'>Rent a car to get around for as much time as you wish driving yourself..</p>
          <button className='cbtn'>Book Now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <div  className='ccaption'>
          <h1 className='head-title'>Get tour tips</h1>
          
          <p className='carousel-paragraph'>Explore best views out of the city and book a stay for your tour.</p>
          <button className='cbtn'>Get Help</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
        />

        <Carousel.Caption>
        <div  className='ccaption'>
          <h1 className='head-title'>We reach out </h1>
          <p className='carousel-paragraph'>
           We bring you a car as soon as you land off the plane or arrive in the country.
          </p>
          <button className='cbtn'>Contact Us</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
{/* Content found on a landing page after slider */}
<div className='all-cards'>
      <div className='cars-container'>
          <div className='card1-container'>
            <div className='card-head'>
            <h4 className='title'>
              Camping Vans
              </h4>
            </div>
            <div className='card-body-home'>
              <img className='card-image-home' src={Image5} alt='image'></img>
            </div>
            <div className='card-footer-home'>
              <p className='card-paragraph'>Private and perfect cars and vans that you can use to enjoy while you're on tour and you can camp in. We have many of the best cars like this, Find out more here.</p>
              <button className='card-btn-home'>Make a plan</button>
            </div>
            
          </div>
          
      </div>
      <div className='cars-container'>
          <div className='card1-container'>
            <div className='card-head'>
            <h4 className='title'>
              Self Drive Cars
              </h4>
            </div>
            <div className='card-body-home'>
              <img className='card-image-home' alt='image'  src={Image6}></img>
            </div>
            <div className='card-footer-home'>
              <p  className='card-paragraph'>Get a car to get by in which you can drive yourself and have it for as long as you need it, Check more private rides that matches your preferences by clicking below button.</p>
              <button className='card-btn-home'>Make a plan</button>
            </div>
            
          </div>
          
      </div>
      
      <div className='cars-container'>
          <div className='card1-container'>
            <div className='card-head'>
            <h4 className='title'>
             Private Cottages
              </h4>
            </div>
            <div className='card-body-home'>
              <img className='card-image-home' alt='image'  src={Image7} ></img>
            </div>
            <div className='card-footer-home'>
              <p  className='card-paragraph'>A perfect stay for family, or honeymoon which is private and has better view. Button below shows more places like this.
                Enjoy the best of views from different cottages we have for you.
              </p>
              <button className='card-btn-home'>Make a plan</button>
            </div>
            
          </div>
          
      </div>
      <div className='cars-container'>
          <div className='card1-container'>
            <div className='card-head'>
            <h4 className='title'>
              Shared Cottages
              </h4>
            </div>
            <div className='card-body-home'>
              <img className='card-image-home' alt='image' src={Image4} ></img>
            </div>
            <div className='card-footer-home'>
              <p  className='card-paragraph'>Stay with random people and tour together, have fun together. Click the button below to explore more places and stays like this if you like having fun with friends and others..</p>
              <button className='card-btn-home'>Make a plan</button>
            </div>
            
          </div>
          </div>
      </div>
       {/*Beginning of a section for cottages*/}
      

       <div>
             <div className="products-home">
                    <div className="container-home">
                      
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
      {/* Here's is a link to view more products*/}
      <Link className='view-home' to="booking">View more</Link>
      {/*Ad container */}
     <div className='ad-container'>
      <h3 className='ad-title'>Here are our discounted products</h3>
    <div className='cards-ad'>
      <div className='card-ad-view'>
        <img src='' alt='product' className='image'/>
       
      <div className='card-ad-footer'>
        <h5>Product</h5>
        <p>Book now</p>
      </div>
      </div>
    </div>
    <div className='cards-ad'>
      <div className='card-ad-view'>
        <img src='' alt='product'className='image' />
      
      <div className='card-ad-footer'>
        <h5>Product</h5>
        <p>Book now</p>
      </div>
      </div>
    </div>
    <div className='cards-ad'>
      <div className='card-ad-view'>
        <img src='' alt='product' className='image'/>
     
      <div className='card-ad-footer'>
        <h5>Product</h5>
        <p>Book now</p>
      </div>
      </div>
    </div>
    <div className='cards-ad'>
      <div className='card-ad-view'>
        <img src='' alt='product' className='image' />
     
      <div className='card-ad-footer'>
        <h5>Product</h5>
        <p>Book now</p>
      </div>
      </div>
    </div>
    <p className='ad-paragraph'>
          Here are our top products in which you get 20% and it depends on your preferences.
          </p>
    <img className='ad-image' src={ad} />
        
          
          <button className='ad-btn'>Book Now</button>
      </div>
      {/*Beginning of a new section*/}
      
            </React.Fragment>
           
        );
    }
}

export default ProductList;