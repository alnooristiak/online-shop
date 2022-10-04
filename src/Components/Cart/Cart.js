import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total +product.price;
        shipping = shipping +product.shipping;
    }



    return (
        <div>
            <p>oder summary</p>
            <p>value: {cart.length}</p>
            <p>price: {total}</p>
            <p>{shipping}</p>
        </div>
    );
};

export default Cart;