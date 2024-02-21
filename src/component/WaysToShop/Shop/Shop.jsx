import React from 'react';
import Toys from '../../ToyCards/Toys';

const Shop = ({AllToy}) => {
    return (
        <div>
        <div  className=' grid lg:grid-cols-3 gap-5  container mx-auto'>
            {
              AllToy.map(t => <Toys key={t.id} t = {t}></Toys>)
            }

      
</div> 
        </div>
    );
};

export default Shop;