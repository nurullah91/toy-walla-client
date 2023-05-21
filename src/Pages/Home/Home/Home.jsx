import { Helmet } from "react-helmet";
import Shop from "../../Shop/Shop";
import Slider from "../Slider/Slider";
import Gallery from "../Gallery/Gallery";
import CustomerReview from "../CustomerReview/CustomerReview";
import Subscribe from "../Subscribe/Subscribe";


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
           <CustomerReview></CustomerReview>
           <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;