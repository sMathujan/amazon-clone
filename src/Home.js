import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
                <img
                    className='home__image'
                    src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2021/Marketing/EvergreenQ1/Gateway/US-EN_AMU_EvergreenQ1_DMUX-3799_JZ_OnS_GW_Hero_D_1500x600_1X_CV1._CB412009348_.jpg'
                />

                <div className='home__row'>
                    <Product
                        id='1'
                        title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses Hardcover – Illustrated, September 13, 2011"
                        price={29.99}
                        image='https://m.media-amazon.com/images/I/81-QB7nDh4L._AC_UY327_FMwebp_QL65_.jpg'
                        rating={5}
                    />
                    <Product
                        id='2'
                        title='HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)
                        by HP'
                        price={129.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/51IIMW6-TbL.jpg'
                        rating={4}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id='3'
                        title='Amazon Basics Classic Puresoft PU-Padded Mid-Back Office Computer Desk Chair with Armrest - Black'
                        price={69.99}
                        image='https://m.media-amazon.com/images/I/71i08qnZeDL._AC_UL480_FMwebp_QL65_.jpg'
                        rating={3}
                    />
                    <Product
                        id='4'
                        title='RUNMUS Gaming Headset for PS4, Xbox One, PC Headset w/Surround Sound, Noise Canceling Over Ear Headphones with Mic & LED Light, Compatible with PS5, PS4, Xbox One, Switch, PC, PS2, Mac, Laptop'
                        price={79.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SL1500_.jpg'
                        rating={5}
                    />
                    <Product
                        id='5'
                        title='New Apple iPhone 12 Pro Max (128GB, Graphite) [Locked] + Carrier Subscription'
                        price={1229.99}
                        image='https://m.media-amazon.com/images/I/71XXJC7V8tL._FMwebp__.jpg'
                        rating={5}
                    />
                </div>

                <div className='home__row'>
                    <Product
                        id='6'
                        title='Google Pixel 4a - New Unlocked Android Smartphone - 128 GB of Storage - Up to 24 Hour Battery - Just Black'
                        price={129.99}
                        image='https://images-na.ssl-images-amazon.com/images/I/7199N-Uz2AL._AC_SL1500_.jpg'
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
