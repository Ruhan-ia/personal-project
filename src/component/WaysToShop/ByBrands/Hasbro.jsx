import React from 'react';
import useToys from '../../../Hook/useToys';
import Shop from '../Shop/Shop';

const Hasbro = () => {
    const [toys] = useToys();
    const Hasbro = toys.filter(toy => toy.brand === 'hasbro')
    return (
        <div>
            <Shop AllToy={Hasbro}></Shop>
        </div>
    );
};

export default Hasbro;