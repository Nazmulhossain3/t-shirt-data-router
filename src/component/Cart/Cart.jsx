import React from 'react';
import './Cart.css'

const Cart = ({cart,handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please give some product</p>
    }
    else{
        message = <div>
            <small>Boroloxx</small>
            <p>Thanks for giving money</p>
        </div>
    }
    
    return (
        <div>
            <h2 className={cart.length === 2 ? 'red' : 'purple'}>Order Summery : {cart.length}</h2>
            {cart.length > 2 ? <span>aro kino</span> : <span>Fokira</span>}
            <p className={`bold ${cart.length===3 ? 'yellow' : 'orange'}`}>Something </p>
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}>
                    {tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button>
                </p>)
            }
            {
                cart.length ===2 && <span>double bonanza!!</span>
                
            }
            {
                cart.length === 3 || <h3>tin ta hoilo na!!!</h3>
            }
        </div>
    );
};

export default Cart;