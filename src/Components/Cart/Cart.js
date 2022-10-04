import React from 'react';

const Cart = ({cart}) => {
    console.log(cart);

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total +product.price;
        shipping = shipping +product.shipping;
    }

    let textt = (total * 10/100).toFixed(2);
    let text = parseInt(textt);

    let allTotal = total+shipping+text;

    return (
        <div>
            <p>oder summary</p>
            <p>value: {cart.length}</p>
            <p>price: {total}</p>
            <p>shipping: {shipping}</p>
            <p>Text: {text}</p>
            <h3>all total: {allTotal}</h3>
            {/* 49-4 Setting the cart data on the localStorage for future retrieve */}
        </div>
    );
};

export default Cart;