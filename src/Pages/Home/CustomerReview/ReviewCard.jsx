import { Rating } from '@smastrom/react-rating'
// react rating styles
import '@smastrom/react-rating/style.css'



const ReviewCard = ({reviews}) => {
    const {customerImg, name, review, ratings} = reviews;
    return (
        <div className="card w-96 h-[35rem] m-5 py-5 bg-blue-50 shadow-xl">
            <figure><img className="w-52 h-52 rounded-full" src={customerImg} alt="User" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{review}</p>
                {/* <div className="font-bold"><p>Ratings: {ratings} <FaStar className="inline text-yellow-500"></FaStar></p></div> */}
                <div className="font-bold flex items-center">Ratings:<Rating className='ml-3' style={{ maxWidth: 100 }} value={ratings} readOnly /></div>
            </div>
        </div>
    );
};

export default ReviewCard;