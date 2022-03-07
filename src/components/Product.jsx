import React from 'react';

const Product = ({ product, handleAddTooCart }) => {
    return (
        <div className="Products-item">
            <img src={product.image} alt={product.tittle} />
            <div className="Product-item-info">
                <h2>
                    {product.tittle}
                    <span>
                        $
                        {'  '}
                        {product.price}
                    </span>
                </h2>
                <p>{product.description}</p>
            </div>
            <button type="button" onClick={handleAddTooCart(product)}>To buy</button>
        </div>
        );
}

export default Product;