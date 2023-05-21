import { Helmet } from "react-helmet";
import Shop from "../../Shop/Shop";
import Slider from "../Slider/Slider";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    return (
        <div>
            {/* dynamic title */}
            <Helmet>
                <title>Home-Toy wala</title>
            </Helmet>

        {/* components */}
           <Slider></Slider>
           <Gallery></Gallery>
           <Shop></Shop>
            
        </div>
    );
};

export default Home;