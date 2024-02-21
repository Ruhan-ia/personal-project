import React from 'react';
import useToys from '../../../Hook/useToys';
import Shop from '../Shop/Shop';

const Age89 = () => {
    const [toys] = useToys();
    const Age89 = toys.filter(toy => toy.age === '8-9')
    return (
        <div>
           <Shop AllToy={Age89}></Shop> 
        </div>
    );
};

export default Age89;