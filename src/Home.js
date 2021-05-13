import React from 'react';

import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className="home_image"
                src="https://img.global.news.samsung.com/in/wp-content/uploads/2020/10/KV_M31Prime-1024x371.jpg" alt=''
                />
                <div className='home_row'>
                    <Product 
                        title='The Lean Startup' 
                        price={99} 
                        image='https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg' 
                        rating={5}/>
                    <Product
                        title='HP Laptop 14s-er0003' 
                        price={49990} 
                        image='https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/c/0/c06970886.png' 
                        rating={3}
                    />
                </div>
                <div className='home_row'>
                    <Product
                        title='Sony Headphones XM3' 
                        price={19999} 
                        image='https://media.croma.com/image/upload/v1605265572/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/8944985997342.png' 
                        rating={5}
                    />
                    <Product
                        title='Pigeon 12137 Emergency Light' 
                        price={1199} 
                        image='https://storage.sg.content-cdn.io/cdn-cgi/image/%7Bwidth%7D,%7Bheight%7D,quality=75,format=auto/in-resources/3da6157f-93b7-4d52-8005-c008a574721a/Images/ProductImages/Source/EMLPG04.jpg' 
                        rating={4}
                    />
                    <Product
                        title='The Light Between Oceans' 
                        price={299} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81S4Ob8YwLL.jpg"
                        rating={5}
                    />
                </div>
                <div className='home_row'>
                    <Product
                        title='Picme Samsung M21 Back Cover' 
                        price={249} 
                        image='https://images-na.ssl-images-amazon.com/images/I/61rMFuu5sFL._AC_SX679_.jpg' 
                        rating={5}
                    />
                    <Product
                        title='Poco X3' 
                        price={14999} 
                        image='https://imgk.timesnownews.com/story/iPhone_Xs_79_0.png?tr=w-400,h-300,fo-auto' 
                        rating={5}
                    />
                </div>
            </div>
            
        </div>
    )
}

export default Home

