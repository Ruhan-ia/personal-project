import React from 'react';
import Shop from '../Shop/Shop';
import useToys from '../../../Hook/useToys';

const Age1011 = () => {
    const [toys] = useToys();
    const Age1011 = toys.filter(toy => toy.age === '10-11')
    return (
        <div>
           <Shop AllToy={Age1011}></Shop> 
        </div>
    );
};

export default Age1011;