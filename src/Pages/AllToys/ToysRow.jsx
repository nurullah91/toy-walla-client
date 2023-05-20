import { FaInfoCircle } from "react-icons/fa";


const ToysRow = ({toy,index}) => {

    const {photoUrl, toyName, sellerName, subCategory, price, quantity} = toy;
    return (
        <tr className="">
            <th>{index+1}</th>
            <th><img className="max-w-[8rem] rounded" src={photoUrl} alt="" /></th>
            <td>{toyName}</td>
            <td>{sellerName}</td>
            <td>{subCategory}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button className="bg-blue-200 p-3 rounded text-2xl"><FaInfoCircle className=""></FaInfoCircle></button></td>
        </tr>
    );
};

export default ToysRow;