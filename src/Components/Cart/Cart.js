import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total =cart.reduce((total,prd)=>total+prd.salary,0);
    return (
        <div>
            <h3>Players Summery</h3>
            <h4>Add Players: {cart.length} </h4>
            <h5>Total: {total} </h5>
        </div>
    );
};

export default Cart;