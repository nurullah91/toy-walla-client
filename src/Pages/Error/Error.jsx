import Lottie from "lottie-react";
import lottieError from "../../assets/lottieError.json"
import { Link, useRouteError } from "react-router-dom";
const Error = () => {

    const {error, status} = useRouteError();
    return (
        <div className="flex items-center h-screen p-16 bg-gray-300">

            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <Lottie animationData={lottieError} loop={true} />

            <h4 className='text-2xl font-semibold md:text-3xl text-fuchsia-500 mb-8'>{error?.message} {status || 404}</h4>

            <Link className="btn btn-secondary" to='/'>Back to Home page</Link>
            </div>

        </div>
    );
};

export default Error;