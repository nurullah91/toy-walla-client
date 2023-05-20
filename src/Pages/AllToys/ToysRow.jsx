import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";


const ToysRow = ({toy,index}) => {

    const {_id, photoUrl, toyName, sellerName, subCategory, price, quantity} = toy;
    return (
        <tr className="">
            <th>{index+1}</th>
            <th><img className="max-w-[8rem] rounded" src={photoUrl} alt="" /></th>
            <td>{toyName}</td>
            <td>{sellerName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><Link to={`/car-details/${_id}`}><button className="bg-blue-200 p-3 rounded text-2xl"><FaInfoCircle className=""></FaInfoCircle></button></Link></td>
        </tr>
    );
};

export default ToysRow;