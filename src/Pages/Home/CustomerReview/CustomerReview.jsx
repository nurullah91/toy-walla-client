import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
// import ParticleBg from "./Particles/ParticleBg";

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://toy-wala-server.vercel.app/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])


    return (
        <div className="py-20">

            <h3 className="text-center text-4xl font-bold text-rose-500">Our Customers Review</h3>
            <Marquee direction="right" speed={100} pauseOnHover={true}>

            { 
                reviews.map(review=><ReviewCard key={review._id} reviews={review}></ReviewCard>)
            }

            </Marquee>
           <div className="text-center mt-10">
           <Link to='add-review' className="btn bg-rose-500 border-none">Add a review</Link>
           </div>
           
           {/* <ParticleBg></ParticleBg> */}
        </div>

    );
};

export default CustomerReview;