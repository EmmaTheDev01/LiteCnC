import React, { Component } from 'react';
import Title from './Title';
import CartColumn from './CartColumn';
import CartList from './CartList';
import CartTotal from './CartTotal';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../Context'; 
import './Cart.css';

class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        
                        if(cart.length>0){
                            return (
                                <React.Fragment>
                                    <h2 className='mycart'>My wishlist</h2>
                                    <CartColumn/>
                                    <CartList value={value}/>
                                    <CartTotal value={value}/>
                                </React.Fragment>
                            );
                        }else{
                            return(
                                <EmptyCart/>
                            );
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

export default Cart;