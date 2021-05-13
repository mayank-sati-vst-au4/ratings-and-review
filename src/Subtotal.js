import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import {useStateValue} from './StateProvider'
import { ShoppingBasket } from '@material-ui/icons';
import { getBasketTotal } from './reducer';
import { useHistory } from "react-router-dom";

function Subtotal() {
    const history = useHistory();
    const [ { basket }, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
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

            <button onClick={e => history.push('/payment')}> Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal

/* 
C137762807  17
C137763027  12
C137763275  15 --
C137763525  17
C137763631  14
C137763809  15  --
C137764255  10
C137764380  11
C137764538  9
C137764658  14
C137764726  9
C137764815  10
C137764911  9
C137765066  15 */