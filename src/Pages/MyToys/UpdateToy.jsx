import { useLoaderData } from "react-router-dom";


const UpdateToy = () => {

    // get toy info using loader data
    const toy = useLoaderData();
    const {photoUrl} = toy;
    return (
        <div>
            update information
            <img src={photoUrl} alt="" />
            
        </div>
    );
};

export default UpdateToy;