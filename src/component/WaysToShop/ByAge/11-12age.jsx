import React from 'react';
import useToys from '../../../Hook/useToys';
import Shop from '../Shop/Shop';

const Age1112 = () => {
    const [toys] = useToys();
    const Age1112 = toys.filter(toy => toy.age === '11-12')
    return (
        <div>
          <Shop AllToy={Age1112}></Shop>  
        </div>
    );
};

export default Age1112;