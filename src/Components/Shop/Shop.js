import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[])

    const handleAddToCart = (product) =>{
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    };

    return (
        <div className='container-fluid'>
            <div className="container">
                <div className="row mt-4">
                    <div className="col-4">
                        <Cart cart={cart}></Cart>
                    </div>
                    {/* <div className='productContainer'> */}
                        {
                            products.map(product => <Product
                            key={product.id}
                            product={product}
                            handleAddToCart={handleAddToCart}
                            ></Product>)
                        }
                    {/* </div> */}
                </div>
            </div>
        </div>
    );
};

export default Shop;