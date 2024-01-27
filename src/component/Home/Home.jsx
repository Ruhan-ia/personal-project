import Banner from '../Banner/Banner';
import OurPolicy from '../OurPolicy/OurPolicy';
import Contact from '../ToyCards/Contact/Contact';

import ToyCards from '../ToyCards/ToyCards';
import WaysToShop from '../WaysToShop/WaysToShop';

const Home = () => {
   
    return (
        <div>
            <Banner></Banner>
            <ToyCards></ToyCards>
            <OurPolicy></OurPolicy>
           <WaysToShop></WaysToShop>
            <Contact></Contact>

        </div>
    );
};

export default Home;