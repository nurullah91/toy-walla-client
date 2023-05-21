import Lottie from "lottie-react";
import subscribe from '../../../assets/lottieSubscribe.json'
const Subscribe = () => {
    return (
        <div className="bg-[#26c0eb4d] ">
            <div className="flex w-11/12 lg:w-9/12 mx-auto py-10 flex-col-reverse lg:flex-row items-center">
                <div className="grow">
                    <h3 className="text-center text-3xl font-bold text-pink-500">Subscribe For Get Update Regularly</h3>

                    <div className="my-5 relative">
                        <p className="mb-5">If you want to get update regularly via email please subscribe</p>
                        <input className="shadow-lg p-3 rounded-full w-full" type="text" placeholder="Enter Your Email" />

                        <span className="bg-pink-500 text-white p-3 rounded-full absolute shadow-lg right-0">Subscribe</span>
                    </div>

                </div>
                <div className="w-1/2"><Lottie animationData={subscribe} loop={true}></Lottie></div>

            </div>
        </div>
    );
};

export default Subscribe;