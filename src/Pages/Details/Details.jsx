import { useLoaderData } from "react-router-dom";


const Details = () => {

    const toy = useLoaderData();
    const {photoUrl} = toy;

    return (
        <div>
            Details about car
            <img src={photoUrl} alt="photo" />
        </div>
    );
};

export default Details;