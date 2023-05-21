import { useEffect, useState } from "react";
import CarCard from "../Home/carCard/CarCard";
import Aos from "aos";
import './Shop.css'


Aos.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });

const Shop = () => {

    const [cars, setCars] = useState([]);
    const [category, setCategory] = useState('all')


    const handleCategory = categoryName => {
        setCategory(categoryName);
    }

    useEffect(() => {
        fetch(`https://toy-wala-server.vercel.app/cars-by-category/${category}`)
            .then(res => res.json())
            .then(result => {
                setCars(result)
            })

    }, [category])
    console.log(cars);


    return (
        <div className="Shop-bg">
            <h1 className="text-center text-rose-500 text-5xl font-bold py-10">Shop a Toy Car</h1>

            <div className="text-center my-5">
                <div className="btn-group flex-wrap">
                    <button onClick={() => handleCategory('all')} className= {`btn hover:bg-rose-500  border-none ${category == 'all' ? 'bg-rose-500' : ''}`}>All Cars</button>
                    <button onClick={() => handleCategory('racing')} className={`btn hover:bg-rose-500 border-none ${category == 'racing' ? 'bg-rose-500' : ''}`}>Racing</button>
                    <button onClick={() => handleCategory('sports')} className={`btn hover:bg-rose-500 border-none ${category == 'sports' ? 'bg-rose-500' : ''}`}>Sports</button>
                    <button onClick={() => handleCategory('trucks')} className={`btn hover:bg-rose-500 border-none ${category == 'trucks' ? 'bg-rose-500' : ''}`}>Truck</button>
                    <button onClick={() => handleCategory('police')} className={`btn hover:bg-rose-500 border-none ${category == 'police' ? 'bg-rose-500' : ''}`}>Police</button>
                    <button onClick={() => handleCategory('emergency')} className={`btn hover:bg-rose-500 border-none ${category == 'emergency' ? 'bg-rose-500' : ''}`}>Emergency</button>

                </div>

                <div  data-aos="fade-left" 


                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 md:w-9/12 mx-auto py-10">
                    {
                        cars.map(car => <CarCard key={car._id} car={car}></CarCard>)
                    }
                </div>


            </div>
        </div>
    );
};

export default Shop;