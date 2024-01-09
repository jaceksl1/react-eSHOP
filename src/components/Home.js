import React from 'react'
import './Home.css';
import Product from './Product';

export const Home = () => {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <div className="home__row">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home