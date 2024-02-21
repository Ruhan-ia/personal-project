import React from 'react';
import useToys from '../../../Hook/useToys';
import Shop from '../Shop/Shop';

const Age34 = () => {
    const [toys] = useToys();
    const Age34 = toys.filter(toy => toy.age === '3-4')

    return (
        <div>
           <Shop AllToy={Age34}></Shop> 
        </div>
    );
};

export default Age34;