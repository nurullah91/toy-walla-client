import { FaEdit, FaRegWindowClose } from "react-icons/fa";

const MyToysRow = ({toy}) => {
    const {photoUrl, toyName, subCategory, price, quantity} = toy;
    console.log(toy);
    return (
        <tr>
            <th><button className="bg-blue-300 rounded-md p-2 text-red-500 text-2xl"><FaRegWindowClose></FaRegWindowClose> </button></th>
            <td><img className="max-w-[8rem] rounded-md" src={photoUrl} alt="image" /></td>
            <td>{toyName}</td>
            <td>{subCategory}</td>
            <td>{price} Tk.</td>
            <td>{quantity}</td>
            <td><button className="bg-blue-300 rounded-md p-2 text-2xl"><FaEdit></FaEdit></button></td>
        </tr>

    );
};

export default MyToysRow;