import React from 'react';
import useToys from '../../../Hook/useToys';
import Shop from '../Shop/Shop';

const Ego = () => {
    const [toys] = useToys();
    const Ego = toys.filter(toy => toy.brand === 'lego')
    return (
        <div>
           <Shop AllToy={Ego}></Shop> 
        </div>
    );
};

export default Ego;