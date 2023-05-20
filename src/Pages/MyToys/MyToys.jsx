import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {

    const [toys, setToys] = useState([]);

    const { user } = useContext(AuthContext);

    useEffect(() => {

        fetch(`http://localhost:5000/my-toys?email=${user?.email}`)
            .then(res => res.json())
            .then(result => {
                setToys(result)
            })
    }, [user])


    return (
        <div>
            <h3 className="text-center text-4xl my-8 font-bold">My toys</h3>
            <button className="bg-rose-500 text-white px-5 py-3 rounded-md ml-5">Sort by Price</button>


            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head*/}
                        <thead>
                            <tr>
                                <th>Action</th>
                                <th>image</th>
                                <th>Name</th>
                                <th>Sub Category</th>
                                <th>price</th>
                                <th>Quantity</th>
                                <th>Update</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                toys.map(toy=><MyToysRow key={toy._id} toy={toy}></MyToysRow>)
                            }
                            
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyToys;