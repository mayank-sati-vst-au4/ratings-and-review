import React from 'react';
import Subtotal from './Subtotal';
import './Checkout.css';
import {useStateValue} from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
    const [{basket, user}, dispatch] = useStateValue();

    return (
        <div className='checkout'>
            <div className='checkout_left'>
                <img 
                    className='checkout_ad'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRL1P7ADd6ERY85YaRwgAZtiXA8t30m-cDmvA&usqp=CAU'
                    alt='no img'
                />
                <div >
                    <h4> Hello, {user?.email} </h4>
                    <h3 className='checkout_title'>Your Amazon Cart </h3>

                    
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                    {/* Cart Items */}
                    {/* Cart Items */}
                    {/* Cart Items */}
                </div>
            </div>
            <div className='checkout_right'>
                <h4 > Total Amount</h4>
                <Subtotal/>


            </div>
        </div>
    )
}

export default Checkout;
