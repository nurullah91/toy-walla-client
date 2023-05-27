import { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard";
import Marquee from "react-fast-marquee";

const Gallery = () => {
    const [images, setImages] = useState([]);


    useEffect(()=>{
        fetch('https://toy-wala-server.vercel.app/gallery')
        .then(res=>res.json())
        .then(data=>{
            setImages(data);
        })
    },[])
    return (
        <div className="custom-bg py-24">

            <h3 className="text-4xl font-bold text-center text-rose-500 mb-10">Our Best Cars Photo</h3>
            <Marquee speed={70} pauseOnClick={true}>
            {
                images.map(image=><GalleryCard key={image._id} image={image}></GalleryCard>)
            }

            </Marquee>
            <div className="text-center mt-10">
                <button className="btn bg-rose-500 border-none">Add a photo</button>
            </div>
        </div>
    );
};

export default Gallery;