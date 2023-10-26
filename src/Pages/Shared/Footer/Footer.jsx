import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import './footer.css'
const Footer = () => {
    return (
        <footer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-start px-10 py-20 footerBg  text-gray-300">
            <div className="text-center border w-56 h-56 rounded-full p-4 col-span-2 mx-auto md:col-span-1">
                <img className="w-11/12 scale-75" src="https://i.ibb.co/NyJPtRf/image.png" alt="toy wala" />
                <p className="text-xl font-bold">Toy Wala Enterprize</p>
                <p>Providing reliable Toy since 1996</p>
            </div>
            <div>
                <span className="text-white font-bold text-xl">Our Services</span>
                <p>Racing Car</p>
                <p>Sports Car</p>
                <p>Monstar Truck</p>
                <p>Police Car</p>
                <p>Emergency vehicle</p>
            </div>
            <div>
                <span className="text-xl font-bold text-white block">Copyright info</span>
                <Link>Terms of use</Link>
                <p>All rights deserve only Toy wala</p>
            </div>
            <div>

                <h4 className="text-xl font-bold text-white">Contact with Us</h4>

                <p>Phone: 0170000000</p>
                <p>Email: sample@gmail.com</p>
                <div className="flex items-center text-3xl mt-5">
                    <Link><FaFacebook className="mr-3 hover:scale-125  hover:text-blue-500 transition-all duration-300"></FaFacebook></Link>
                    <Link><FaTwitter className="mr-3 hover:scale-125  hover:text-blue-500 transition-all duration-300"></FaTwitter></Link>
                    <Link><FaLinkedin className="mr-3 hover:scale-125  hover:text-blue-500 transition-all duration-300"></FaLinkedin></Link>
                    <Link><FaYoutube className="mr-3 hover:scale-125  hover:text-red-700 hover:bg-white rounded-md transition-all duration-300"></FaYoutube></Link>
                </div>
            </div>

        </footer>
    );
};

export default Footer;