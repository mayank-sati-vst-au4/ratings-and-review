import React, {useState} from 'react';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { Link } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

function Payment() {
    const[{basket, user}, dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

 
    const handleSubmit = e => {
        // Stripe here
    }

    const handleChange = event => {
        // Handle and Listen to changes in the card element
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    }

    return (
        <div className='payment'>
            <div className="payment_container">
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>
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
                                rating={item.rating}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment section - Payment Method */}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3> Payment Method </h3>
                    </div>
                    <div className='payment_details'>
                        {/* Stripe will be used here */}
                            <form onSubmit={handleSubmit}> 
                                <CardElement onChange={handleChange}/>
                                <div className="payment_priceContainer">
                                
                                    <CurrencyFormat
                                        renderText = {(value) => (
                                           <>
                                            <p>
                                                Subtotal ({basket?.length} items): <strong> {value}</strong>
                                            </p>
                                            <small className='subtotal_gift'>
                                                <input type ='checkbox' /> This order contains a gift
                                            </small>
                                            </>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={'text'}
                                        thousandSeperator={true}
                                        prefix={'Rs'}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>
                                            {processing ? <p> Processing</p> : "Buy Now"}
                                        </span>
                                    </button>

                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
