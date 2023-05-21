import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const MyToys = () => {

    const [toys, setToys] = useState([]);
    const [sort, setSort] = useState('high')
    const { user } = useContext(AuthContext);

    useEffect(() => {

        fetch(`http://localhost:5000/my-toys?email=${user?.email}&sort=${sort}`)
            .then(res => res.json())
            .then(result => {
                setToys(result)
            })
    }, [user, sort])

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:5000/my-toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )

                            const remaining = toys.filter(toy => toy._id !== id);
                            setToys(remaining)
                        }
                    })




            }
        })

    }

    return (
        <div>
            {/* dynamic title */}
            <Helmet>
                <title>MyToy-Toy wala</title>
            </Helmet>



            <h3 className="text-center text-4xl my-8 font-bold">My toys</h3>

            {/* sorting button conditionally added */}
            <div>
                {
                    sort == 'high' ? <button onClick={() => setSort('low')} className="bg-rose-500 text-white px-5 py-3 rounded-md ml-5">Sort by low Price</button> :
                        <button onClick={() => setSort('high')} className="bg-rose-500 text-white px-5 py-3 rounded-md ml-5">Sort by high Price</button>
                }
            </div>


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
                                toys.map(toy => <MyToysRow key={toy._id} handleDelete={handleDelete} toy={toy}></MyToysRow>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyToys;