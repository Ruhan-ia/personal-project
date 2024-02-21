import React from 'react';
import useToys from '../../../Hook/useToys';
import Shop from '../Shop/Shop';

const Fp = () => {
    const [toys] = useToys();
    const Fp = toys.filter(toy => toy.brand === 'fp')
    return (
        <div>
            <Shop AllToy={Fp}></Shop>
        </div>
    );
};

export default Fp;