import React from 'react'
import './Home.css';
import Product from './Product';

export const Home = () => {
  return (
    <div>
        <div className="home">
            <div className="home__container">
                <div className="home__row">
                    <Product 
                        id="1"
                        price={1999}
                        rating={5}
                        image="./content/laptop1.png"
                        description="Unleash creativity with our high-performance laptops. From graphic design to gaming, power meets precision for a seamless experience. Elevate your work and play today!"
                    />
                    <Product 
                        id="2"
                        price={2999}
                        rating={4}
                        image="./content/laptop2.png"
                        description="Explore limitless possibilities with our sleek and lightweight laptops. Compact design, powerful performance – the perfect companions for on-the-go professionals. Upgrade your mobility now!"
                    />
                    <Product
                        id="3"
                        price={2499}
                        rating={3}
                        image="./content/laptop3.png" 
                        description="Transform your gaming experience with our cutting-edge laptops. Immerse yourself in stunning graphics and superior speed. Dominate the virtual realm – level up with our gaming laptops!"
                    />
                    <Product 
                        id="4"
                        price={2499}
                        rating={5}
                        image="./content/laptop2.png" 
                        description="Boost your productivity with our business-ready laptops. Sleek, secure, and equipped with the latest technology, these devices are designed to meet the demands of modern professionals. Elevate your workday!"
                    />
                    <Product 
                        id="5"
                        price={2499}
                        rating={2}
                        image="./content/laptop1.png" 
                        description="Embrace innovation with our 2-in-1 laptops. Effortlessly switch between work and play modes, adapting to your needs. Experience the versatility of a laptop and tablet in one sleek device." 
                    />
                    <Product 
                        id="6"
                        price={1499}
                        rating={3}
                        image="./content/laptop3.png" 
                        description="Stay connected and entertained with our affordable laptops. Powerful performance at a pocket-friendly price. Uncompromised quality for everyday tasks – discover reliable computing without breaking the bank!"
                    />
                    <Product 
                        id="7"
                        price={4499}
                        rating={5}
                        image="./content/laptop1.png" 
                        description="Ignite your passion for design with our premium laptops. Sleek aesthetics meet powerful capabilities, offering a canvas for your creativity. Unleash your artistic potential with our cutting-edge devices."
                    />
                    <Product 
                        id="8"
                        price={8499}
                        rating={5}
                        image="./content/laptop1.png" 
                        description="Revolutionize your home office with our ultra-efficient laptops. From virtual meetings to multitasking, experience seamless performance. Redefine remote work – make your workspace as dynamic as you are!"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home