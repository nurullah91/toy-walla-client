import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
    const { user, photo, displayName, logOut } = useContext(AuthContext);


    const handleLogOut = ()=>{
        logOut()
        .then()
        .catch(err =>{
            console.log(err);
        })
    }

    const navItem = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? "active" : ""
        }>Home</NavLink></li>
        <li><NavLink to='/alltoys' className={({ isActive }) => isActive ? "active" : ""
        }>All toys</NavLink></li>
        <li><NavLink to='/mytoys' className={({ isActive }) => isActive ? "active" : ""
        }>My toys</NavLink></li>
        <li><NavLink to='/addtoy' className={({ isActive }) => isActive ? "active" : ""
        }>Add a toy</NavLink></li>
        <li><NavLink to='/blog' className={({ isActive }) => isActive ? "active" : ""
        }>Blog</NavLink></li>

    </>
    return (
        <div className="navbar bg-blue-50 shadow-md">
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
                    <img className="w-20 h-16 rounded-full" src="/logo1.png" alt="toy wala" />
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
                {
                    user ? <>
                        <img  src={user.photoURL || photo} alt={user.displayName || displayName} title={user.displayName || displayName} className="rounded-full h-11 mr-2 w-11" />
                        <button onClick={handleLogOut} to='/login' className="btn">Log out</button>
                    </> :
                        <>
                            <FaUserCircle className="text-4xl"></FaUserCircle>
                            <Link to='/login' className="btn">Login</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;