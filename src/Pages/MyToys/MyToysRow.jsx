import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyToysRow = ({toy, handleDelete}) => {
    const {_id, photoUrl, toyName, subCategory, price, quantity} = toy;

    return (
        <tr>
            <th><button onClick={()=>handleDelete(_id)} className="bg-rose-600 rounded-full text-white p-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button></th>
            <td><img className="max-w-[8rem] rounded-md" src={photoUrl} alt="image" /></td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price} Tk.</td>
            <td>{quantity}</td>
            <td><Link to={`/update-toy/${_id}`} className="bg-blue-300 btn text-black border-none rounded-md p-2 text-2xl"><FaEdit></FaEdit></Link></td>
        </tr>

        

    );
};

export default MyToysRow;