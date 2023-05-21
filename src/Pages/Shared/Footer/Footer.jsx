import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="footer p-10 bg-slate-700  text-gray-300">
            <div className="text-center">
                <img className="rounded-full" src="https://i.ibb.co/ws55v8m/logo1-removebg-preview.png" alt="toy wala" />
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
                <span className="text-xl font-bold text-white">Copyright info</span>
                <Link>Terms of use</Link>
                <p>All rights deserve only Toy wala</p>
            </div>
            <div>

                <h4 className="text-xl font-bold text-white">Our Social media links</h4>
                <div className="flex justify-between items-center text-3xl mt-10">
                    <Link><FaFacebook className="ml-3"></FaFacebook></Link>
                    <Link><FaTwitter className="ml-3"></FaTwitter></Link>
                    <Link><FaLinkedin className="ml-3"></FaLinkedin></Link>
                    <Link><FaYoutube className="ml-3"></FaYoutube></Link>
                </div>
            </div>

        </footer>
    );
};

export default Footer;