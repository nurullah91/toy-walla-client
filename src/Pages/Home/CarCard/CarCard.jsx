
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const CarCard = ({ car }) => {
    const { _id, photoUrl,toyName, price, ratings } = car || {};

    
    useEffect(() => {
        AOS.init({
          duration: 1000,
          delay: 200,
          easing: 'ease-in-out',
        });
      }, []);

    return (
        <div data-aos="fade-up" className="card bg-[#92f7f7a1] text-white shadow-xl">
            <figure><img src={photoUrl} className="w-full h-52" alt="image" /></figure>
            <div className="p-8">
                <h2 className="card-title">{toyName}</h2>
                <p className="text-left my-3">Price: {price} Tk.</p>
             <div className="flex items-center my-5">
             <p>Ratings: {ratings}</p>
             <FaStar className="text-yellow-500 mx-2"></FaStar>
             </div>
                <div className="card-actions justify-end">
                    <Link to={`/car-details/${_id}`} className="btn bg-rose-500 border-none">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default CarCard;