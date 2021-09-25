import React, { useEffect, useState } from 'react';
import './Shop.css'
import Cart from './Cart/Cart';
import Product from './Product/Product';


const Shop = () => {
    const [products, setproducts]=useState([]);
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{
            setproducts(data)
        })
    },[])
    console.log(products)
    return (
        <>
        <div className="shop-container">
           <div className="product-container">
           {
                products.map(product=><Product
                key={product.key}
                product={product}
                ></Product>)
            }
           </div>
          <div className="cart-container">
          <Cart></Cart>
          </div>
            
        </div>
        </>
    );
};

export default Shop;