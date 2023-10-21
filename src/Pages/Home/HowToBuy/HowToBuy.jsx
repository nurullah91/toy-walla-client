import buyImg1 from "../../../assets/buy.jpg"
import buyImg2 from "../../../assets/buy2.jpg"
import buyImg3 from "../../../assets/buy3.jpg"
const HowToBuy = () => {
    return (
        <div className="w-11/12 lg:w-9/12 mx-auto my-10">
            <h3 className="text-center text-4xl font-bold text-rose-500 mb-8">How to buy?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div data-aos="fade-up" className="border-8 p-2 border-rose-500 rounded-md relative">
                    <img className="" src={buyImg1} alt="Image" />
                    <div className="absolute bottom-0 left-0 text-rose-300 bg-black bg-opacity-70 flex opacity-0 hover:opacity-100 transition-opacity duration-500 items-center justify-center w-full h-full ">
                        <h3 className="text-2xl font-semibold p-2">Choose a toy</h3>
                    </div>
                </div>

                <div data-aos="fade-up" className="border-8 p-2 border-rose-500 rounded-md relative">
                    <img className="" src={buyImg2} alt="Image" />
                    <div className="absolute bottom-0 left-0 text-rose-300 bg-black bg-opacity-70 flex opacity-0 hover:opacity-100 transition-opacity duration-500 items-center justify-center w-full h-full ">
                        <h3 className="text-2xl font-semibold p-2">Select a payment option</h3>
                    </div>
                </div>

                <div data-aos="fade-up" className="border-8 p-2 border-rose-500 rounded-md relative">
                    <img className="" src={buyImg3} alt="Image" />
                    <div className="absolute bottom-0 left-0 text-rose-300 bg-black bg-opacity-70 flex opacity-0 hover:opacity-100 transition-opacity duration-500 items-center justify-center w-full h-full ">
                        <h3 className="text-2xl font-semibold p-2">And confirm to your address to complete order</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToBuy;