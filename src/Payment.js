import React from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {
    const[{basket, user}, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className="payment_container">
                {/* Payment section - Delivery Address */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3> Delivery Address </h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p> Kotdwar Road</p>
                        <p>Ramnagar, Uttrakhand</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3> Review Items and Delivery </h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment section - Payment Method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>  </h3>
                    </div>
                    <div className='payment_address'>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
