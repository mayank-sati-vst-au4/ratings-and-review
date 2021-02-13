import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className='product'>
            <div className='product_info'>
                <p className='product_description'>Description</p>
                <p className='product_price'>
                    <small> Rs</small>
                    <strong> 100 </strong>
                </p>
                <div className='product_rating'>
                    <p>*</p>
                    <p>*</p>
                    <p>*</p>
                    <p>*</p>
                </div>
            </div>
                <img src='https://www.investopedia.com/thmb/k-KuJXy6HUSb1No95Ot_ydx6CDA=/2560x2560/filters:no_upscale():max_bytes(150000):strip_icc()/the-intelligent-investor-25099a7263cb499f80de8b20d6b4ab86.jpg' alt='no img'/>
                <button>Add to Basket</button>
        </div>
    )
}

export default Product
