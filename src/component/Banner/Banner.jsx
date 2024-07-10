import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import toy1 from './../../assets/toys/toy-122.jpg';
import toy2 from './../../assets/toys/toy-22.jpg';
import toy3 from './../../assets/toys/toy-33.jpg'
import toy4 from './../../assets/toys/toy-44.jpg'
import toy5 from './../../assets/toys/toy-55.jpg'
import toy6 from './../../assets/toys/toy-66.jpg'
import toy7 from './../../assets/toys/toy-11.jpg'
const Banner = () => {
    return (
        <Carousel dynamicHeight={true} autoPlay={true}>
        <div>
            <img src={toy3}/>
        </div>
        <div>
            <img src={toy2}/>
        </div>
        <div>
            <img src={toy7}/>
        </div>
        <div>
            <img src={toy1} />
        </div>
        <div>
            <img src={toy4} />
        </div>
        <div>
            <img src={toy5} />
        </div>
        <div>
            <img src={toy6} />
        </div>
    </Carousel>
    );
};

export default Banner;