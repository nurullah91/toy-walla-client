import { useEffect, useState } from "react";

const Shop = () => {

    const [cars, setCars] = useState([]);
    const [category, setCategory] = useState('all')


    const handleCategory = categoryName =>{
        setCategory(categoryName);
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/cars-by-category/${category}`)
        .then(res => res.json())
        .then(result =>{
            setCars(result)
        })

    },[category])
    console.log(cars);

    return (
        <div>
            <h1 className="text-center text-5xl font-bold my-10">Shop a Toy Car</h1>

            <div>
                <div className="text-center">
                    <button onClick={()=>handleCategory('all')} className={`btn border-none mr-2 ${category == 'all'?'bg-rose-500':''}`}>All Cars</button>
                    <button onClick={()=>handleCategory('racing')} className={`btn border-none mr-2 ${category == 'racing'?'bg-rose-500':''}`}>Racing</button>
                    <button onClick={()=>handleCategory('sports')} className={`btn border-none mr-2 ${category == 'sports'?'bg-rose-500':''}`}>Sports</button>
                    <button onClick={()=>handleCategory('trucks')} className={`btn border-none mr-2 ${category == 'truck'?'bg-rose-500':''}`}>Truck</button>
                    <button onClick={()=>handleCategory('police')} className={`btn border-none mr-2 ${category == 'police'?'bg-rose-500':''}`}>Police</button>
                    <button onClick={()=>handleCategory('emergency')} className={`btn border-none mr-2 ${category == 'emergency'?'bg-rose-500':''}`}>Emergency</button>

                </div>










                {/* <div className="tabs tabs-boxed">
                    <a className="tab">Tab 1</a>
                    <a className="tab tab-active">All cars</a>
                    <a className="tab">Tab 3</a>
                </div> */}
            </div>
        </div>
    );
};

export default Shop;