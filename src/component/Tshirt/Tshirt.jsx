import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt,handleAddToCart}) => {
    const {_id,index,price,name,gender,picture} = tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>price : {price}</p>
            <button onClick={()=> handleAddToCart(tshirt)} className='btn-buy'>Buy Now</button>
        </div>
    );
};

export default Tshirt;