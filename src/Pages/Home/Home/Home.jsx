import { Helmet } from "react-helmet";
import Shop from "../../Shop/Shop";
import Slider from "../Slider/Slider";
import Gallery from "../Gallery/Gallery";
import CustomerReview from "../CustomerReview/CustomerReview";
import Subscribe from "../Subscribe/Subscribe";
import Brands from "../Brands/Brands";
import HowToBuy from "../HowToBuy/HowToBuy";
import SendGift from "../SendGift/SendGift";
import WhyChoose from "../WhyChoose/WhyChoose";
import OfferPage from "../OfferPage/OfferPage";
import Safety from "../Safety/Safety";


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
           <WhyChoose></WhyChoose>
           <HowToBuy></HowToBuy>
           <SendGift></SendGift>
           <OfferPage></OfferPage>
           <Safety></Safety>
           <Subscribe></Subscribe>
            
        </div>
    );
};

export default Home;