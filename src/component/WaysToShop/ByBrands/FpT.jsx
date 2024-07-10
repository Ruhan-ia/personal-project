import React from 'react';
import Shop from '../Shop/Shop';
import useToys from '../../../Hook/useToys';

const FpT = () => {
    const [toys] = useToys();
    const Fp = toys.filter(toy => toy.brand === 'fp')
    return (
        <div>

         <Shop AllToy={Fp}></Shop>
        </div>
    );
};

export default FpT;