import React from 'react';
import './Product.css';

const Products = (props) => {
    const {name, price, img, shipping} = props.product;
    
    return (
        // <div className='col-8'>
            <div className="card card-st col col-lg-4 col-md-6 col-12">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <p className="card-text">Price: {price}</p>
                    <p>shipping: {shipping}</p>
                    {/* className="btn btn-primary" */}
                    <button className="btn btn-primary"
                        onClick={() => props.handleAddToCart(props.product)}
                    >add To cart</button>
                    {/* <p>Go somewhere</p> */}
                </div>
            </div>
        // </div>
    );
};

export default Products;