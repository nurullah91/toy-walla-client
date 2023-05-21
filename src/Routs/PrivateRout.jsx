import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRout = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return(
            <div className="w-32 mx-auto my-28">
                <div className="h-10 animate-spin w-10 rounded-full mx-auto border-l-4 border-rose-500"></div>
               
            </div>
        )
    }

    if(user){
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRout;