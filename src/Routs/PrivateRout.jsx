import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

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
    else{

        
        Swal.fire({
            icon: 'warning',
            title: 'Sorry...',
            text:'To visit this page you have to login first',
        });
      return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
};

export default PrivateRout;