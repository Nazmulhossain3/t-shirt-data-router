import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

const Grandpa = () => {
    const ring = 'diamond';
    return (
        <div className='grandpa'>
            <h2>this is grand pa</h2>
            <section className='flex'>
                <Father ring={ring}></Father>
                <Uncle></Uncle>
                <Aunty></Aunty>
                </section>
        </div>
    );
};

export default Grandpa;