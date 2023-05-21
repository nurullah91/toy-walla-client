import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import Marquee from "react-fast-marquee";

const CustomerReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(()=>{
        fetch('https://toy-wala-server.vercel.app/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div className="py-20">
            <h3 className="text-center text-4xl font-bold ">Our Customers Review</h3>
            <Marquee direction="right" speed={100} pauseOnClick={true}>

            { 
                reviews.map(review=><ReviewCard key={review._id} reviews={review}></ReviewCard>)
            }

            </Marquee>

        </div>
    );
};

export default CustomerReview;