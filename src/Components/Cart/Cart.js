import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total =cart.reduce((total,prd)=>total+prd.salary,0);
    return (
        <div className="container">
            <h3>Club Players Summery</h3>
            <h4>Total Players: {cart.length} </h4>
            <h5>Total Cost: {total} </h5>
        </div>
    );
};

export default Cart;