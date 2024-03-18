import React from 'react'
import './Products.css'
import PropTypes from 'prop-types';

const Products = ({category,name,price}) =>{
    return (
        <div className="productCard">
            <p>{category}</p>
            <h1>{name}</h1>
            <p>☆☆☆☆☆</p> 
            <p>{price}</p>
        </div>
    )
}

Products.propTypes = {
    category:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    price:PropTypes.number.isRequired
}
export default Products;