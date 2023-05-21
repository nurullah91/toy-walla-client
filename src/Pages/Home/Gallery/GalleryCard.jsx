

const GalleryCard = ({ image }) => {
    const { img } = image
    return (
        <div className="card m-3 w-96 bg-base-100 shadow-xl">
            <img className="rounded h-64" src={img} alt="Shoes" />


        </div>

    );
};

export default GalleryCard;