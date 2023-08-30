import { Helmet } from "react-helmet";
import Shop from "../../Shop/Shop";
import Slider from "../Slider/Slider";
import Gallery from "../Gallery/Gallery";
import CustomerReview from "../CustomerReview/CustomerReview";
import Subscribe from "../Subscribe/Subscribe";
import Brands from "../Brands/Brands";
import HowToBuy from "../HowToBuy/HowToBuy";


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
           <Brands></Brands>
           <HowToBuy></HowToBuy>
           <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;