import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name, img, price, seller, url, stock, features}=props.product;
    return (
        <div className='single-product'>
            <div className="product-image">
                <img src={img} alt="" />
            </div>
            <div className="product-info">
                <div className="main-info">
                <h3>{name}</h3>
                <p><small>by:{seller}</small></p>
                <p>{price}</p>
                <p>only {stock} left in stock - order soon</p>

                <button>add to cart</button>
                </div>
               
            </div>
        </div>
    );
};

export default Product;