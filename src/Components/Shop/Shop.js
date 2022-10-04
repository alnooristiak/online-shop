import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])
    return (
        <div className='container-fluid'>
            <div className="container">
                <div className="row">
                    {/* <div className='productContainer'> */}
                        {
                            products.map(product => <Product
                            key={product.id}
                            product={product}
                            ></Product>)
                        }
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Shop;