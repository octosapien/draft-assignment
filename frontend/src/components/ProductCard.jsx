import React from 'react';

const ProductCard = ({ product, onAdd, onRemove }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => onAdd(product._id)}>+</button>
            <button onClick={() => onRemove(product._id)}>-</button>
        </div>
    );
};

export default ProductCard;
