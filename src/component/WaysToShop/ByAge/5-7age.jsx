import React from 'react';
import useToys from '../../../Hook/useToys';
import Shop from '../Shop/Shop';

const Age57 = () => {
    const [toys] = useToys();
    const Age57 = toys.filter(toy => toy.age === '5-7')
    return (
        <div>
            <Shop AllToy={Age57}></Shop>
        </div>
    );
};

export default Age57;