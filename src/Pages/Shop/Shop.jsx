import { useEffect, useState } from "react";
import CarCard from "../Home/carCard/CarCard";

const Shop = () => {

    const [cars, setCars] = useState([]);
    const [category, setCategory] = useState('all')


    const handleCategory = categoryName => {
        setCategory(categoryName);
    }

    useEffect(() => {
        fetch(`http://localhost:5000/cars-by-category/${category}`)
            .then(res => res.json())
            .then(result => {
                setCars(result)
            })

    }, [category])
    console.log(cars);

    return (
        <div>
            <h1 className="text-center text-5xl font-bold my-10">Shop a Toy Car</h1>

            <div className="text-center my-5">
                <div className="btn-group">
                    <button onClick={() => handleCategory('all')} className={`btn border-none ${category == 'all' ? 'bg-rose-500' : ''}`}>All Cars</button>
                    <button onClick={() => handleCategory('racing')} className={`btn border-none ${category == 'racing' ? 'bg-rose-500' : ''}`}>Racing</button>
                    <button onClick={() => handleCategory('sports')} className={`btn border-none ${category == 'sports' ? 'bg-rose-500' : ''}`}>Sports</button>
                    <button onClick={() => handleCategory('trucks')} className={`btn border-none ${category == 'trucks' ? 'bg-rose-500' : ''}`}>Truck</button>
                    <button onClick={() => handleCategory('police')} className={`btn border-none ${category == 'police' ? 'bg-rose-500' : ''}`}>Police</button>
                    <button onClick={() => handleCategory('emergency')} className={`btn border-none ${category == 'emergency' ? 'bg-rose-500' : ''}`}>Emergency</button>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-11/12 md:w-9/12 mx-auto">
                    {
                        cars.map(car => <CarCard key={car._id} car={car}></CarCard>)
                    }
                </div>


            </div>
        </div>
    );
};

export default Shop;