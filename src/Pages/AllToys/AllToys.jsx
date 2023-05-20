import { useEffect, useState } from "react";

const AllToys = () => {

    const [showAll, setShowALl] = useState(20);
    const [toys, setToys] =useState([]);

    useEffect(()=>{
        fetch(`http://localhost:5000/all-toys/${showAll}`)
        .then(res=>res.json())
        .then(data=>{
            setToys(data);
        })
    },[showAll])


    const handleShowAll = () =>{
        setShowALl('all')
    }
    return (
        <div>
            All toys :{toys.length}
            <button onClick={handleShowAll} className="btn btn-secondary">Show all</button>
        </div>
    );
};

export default AllToys;