import React from 'react';
import './Product.css';

const Products = (props) => {
    const {name, price, img} = props.product;
    return (
        // <div>
            <div className="card card-st col col-lg-3 col-md-6 col-12">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Price: {price}</p>
                    {/* className="btn btn-primary" */}
                    <p>Go somewhere</p>
                </div>
            </div>
        // </div>
    );
};

export default Products;