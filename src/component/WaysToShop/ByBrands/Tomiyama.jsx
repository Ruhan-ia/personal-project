import React from 'react';
import useToys from '../../../Hook/useToys';
import Shop from '../Shop/Shop';

const Tomiyama = () => {
    const [toys] = useToys();
    const Tomiyama = toys.filter(toy => toy.brand === 'tomiyama')
    return (
        <div>
            <Shop AllToy={Tomiyama}></Shop>
        </div>
    );
};

export default Tomiyama;