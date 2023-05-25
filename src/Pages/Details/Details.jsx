import { useLoaderData } from "react-router-dom";
import './Details.css'
import { FaStar } from "react-icons/fa";

const Details = () => {

    const toy = useLoaderData();
    const { photoUrl, toyName, price, ratings, subCategory, sellerName, quantity, details, email } = toy;

    return (
        <div className="custom-bg">
            <div className="w-11/12 lg:w-9/12 mx-auto p-5 ">
                <h2 className="text-4xl font-bold text-center my-5 text-rose-500 ">Welcome to Toy Wala</h2>

                <div className="lg:flex shadow-md pb-24">
                    <img className="rounded-t-md lg:rounded-l-md lg:rounded-r-none lg:w-1/2" src={photoUrl} alt="photo" />


                    <div className="bg-blue-50 lg:rounded-r-md lg:rounded-l-none rounded-b-md p-8 ">
                        <h3 className="text-rose-500 font-bold text-3xl my-3">{toyName}</h3>
                        <p className="">{details}</p>
                        <h2 className="text-2xl font-bold text-rose-600 my-3">Price: {price} Tk.</h2>
                        <p>Sub Category: {subCategory}</p>
                        <div className="flex items-center">
                            <h4>Ratings: {ratings}</h4>
                            <FaStar className="ml-2 text-yellow-500"></FaStar>
                        </div>
                        <p className="font-bold">Available Quantity: {quantity} pcs</p>

                            <div className="mt-10">
                                <h3>Seller Name: {sellerName}</h3>
                                <p>Seller Email: {email}</p>
                            </div>
                       

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;