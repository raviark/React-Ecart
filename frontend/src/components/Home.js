import React from 'react';
import { CartState } from './context/Context';
import SingleProduct from './SingleProduct';
import Filter from './Filter';
import "./styles.css";
const Home = () => {

    const {state: {products} } =  CartState();
    console.log(products);
  return (
    <div className='home'>
    <Filter />
    <div className='productContainer'>
        {
            products.map((prod) => {
               return <SingleProduct key={prod.id} prod={prod} />
            })
        }
    </div>
    </div>
  )
}

export default Home