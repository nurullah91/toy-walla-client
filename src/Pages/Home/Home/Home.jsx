import { Helmet } from "react-helmet";
import Shop from "../../Shop/Shop";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div>
            {/* dynamic title */}
            <Helmet>
                <title>Home-Toy wala</title>
            </Helmet>

        {/* components */}
           <Slider></Slider>
           <Shop></Shop>
            
        </div>
    );
};

export default Home;