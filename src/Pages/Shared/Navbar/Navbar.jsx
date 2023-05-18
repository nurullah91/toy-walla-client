import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {

    const navItem = <>
     <li><Link>Home</Link></li>
     <li><Link>Al toys</Link></li>
     <li><Link>My toys</Link></li>
     <li><Link>Add a toy</Link></li>
     <li><Link>Blog</Link></li>
    
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                       {
                        navItem
                       }
                    </ul>
                </div>
                <div className="flex items-center">
                <img className="w-20 h-16" src="/logo1.png" alt="toy wala" />
                <Link to='/' className="btn btn-ghost normal-case text-xl">Toy Wala</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   
                   {
                    navItem
                   }
                   
                </ul>
            </div>
            <div className="navbar-end">
                <FaUserCircle className="text-4xl"></FaUserCircle>
                <Link to='/login' className="btn">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;