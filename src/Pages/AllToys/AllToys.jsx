import { useEffect, useState } from "react";
import ToysRow from "./ToysRow";

const AllToys = () => {

    const [showAll, setShowALl] = useState(5);
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch(`http://localhost:5000/all-toys/${showAll}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }, [showAll])


    const handleShowAll = (limit) => {
        setShowALl(limit)
    }
    const handleSearch = () => {
        fetch(`http://localhost:5000/getJobsByText/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToys(data);
          });
      };
    
    return (
        <div>
            <div>

                <div className="search-box p-2 text-center">
                    <input
                        onChange={(e) => setSearchText(e.target.value)}
                        type="text"
                        className="p-1"
                    />{" "}
                    <button onClick={handleSearch}>Search</button>
                </div>

                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead className="sticky top-0">
                            <tr className="">
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
                {showAll == 'all' ? <button onClick={() => handleShowAll(5)} className="btn btn-secondary">Show less</button> : <button onClick={() => handleShowAll('all')} className="btn btn-secondary">Show all</button>
                }
            </div>
        </div >
    );
};

export default AllToys;