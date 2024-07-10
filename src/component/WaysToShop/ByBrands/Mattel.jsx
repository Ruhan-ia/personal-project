import useToys from '../../../Hook/useToys';
import Shop from '../Shop/Shop';

const Mattel = () => {
    const [toys] = useToys();
    const Mattel = toys.filter(toy => toy.brand === 'mattel')
    return (
        <div>
            <Shop AllToy={Mattel}></Shop>
        </div>
    );
};

export default Mattel;