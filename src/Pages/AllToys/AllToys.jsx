import { useEffect, useState } from "react";
import ToysRow from "./ToysRow";
import { Helmet } from "react-helmet";

const AllToys = () => {

    const [showAll, setShowALl] = useState(20);
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch(`https://toy-wala-server.vercel.app/all-toys/${showAll}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [showAll])


    const handleShowAll = (limit) => {
        setShowALl(limit)
    }
    const handleSearch = () => {
        fetch(`https://toy-wala-server.vercel.app/cars-by-name/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                setToys(data);
            });
    };

    return (
        <div>

            {/* dynamic title */}
            <Helmet>
                <title>AllToys-Toy wala</title>
            </Helmet>
            <div>

                <div className="text-center my-5">
                    <div className="btn-group p-2">
                        <input
                            onChange={(e) => setSearchText(e.target.value)}
                            type="text"
                            className="p-2  bg-blue-100 shadow-md rounded"
                        />{" "}
                        <button className="btn bg-rose-500 border-none shadow-md" onClick={handleSearch}>Search</button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead className="sticky top-0">
                            
                            <tr>
                                <th>No.</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Seller</th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* table tows */}

                            {
                                toys.map((toy, index) => <ToysRow key={toy._id} toy={toy} index={index}></ToysRow>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
            <div className="text-center my-5 ">
                {showAll == 'all' ? <button onClick={() => handleShowAll(5)} className="btn bg-rose-500 border-none">Show less</button> : <button onClick={() => handleShowAll('all')} className="btn bg-rose-500 border-none">Show all</button>
                }
            </div>
        </div >
    );
};

export default AllToys;