import { FaEdit, FaRegWindowClose } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyToysRow = ({toy}) => {
    const {_id, photoUrl, toyName, subCategory, price, quantity} = toy;

    return (
        <tr>
            <th><button className="bg-blue-300 rounded-md p-2 text-red-500 text-2xl"><FaRegWindowClose></FaRegWindowClose> </button></th>
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