
import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';

const Login = () => {
    const { login, googleSignIn } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [show, setShow] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    // sign in with users email and password
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        console.log(email, password);

        login(email, password)
            .then(() => {

                Swal.fire(
                    'Success',
                    'Login successful',
                    'success'
                )

                form.reset();
                setError('')
                navigate(from, { replace: true });
            })
            .catch(err => {

                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.message,
                })


                setError(err.message);
            })
    }

    // google sign in 
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                setError('');
                console.log(result.user);
            })
            .catch(err => {
                setError(err.message);
            })
    }

    // password sow handle
    const handleShow = () => {
        setShow(!show);
    }

    return (
        <div className='custom-bg py-14'>

            {/* dynamic tittle  */}
            <Helmet>
                <title>Login-Toy wala</title>
            </Helmet>


            <div className='text-center'>
                <h2 className="text-5xl font-bold text-rose-600 mb-5"> Please Login</h2>


                <div className='w-9/12 mx-auto lg:w-1/4 bg-[#69a6e784] shadow-md p-5 my-5 rounded-lg'>


                {/* Login form */}

                    <form onSubmit={handleLogin}>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <label className="input-group input-group-vertical">
                                <input type="text" name='email' placeholder="Enter your Email" className="input input-bordered" />
                            </label>


                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <label className="input-group input-group-vertical relative">
                                <input type={show ? 'text' : 'password'} name='password' placeholder="Enter your password" className="input input-bordered" />
                                <p className='absolute right-4 top-4' onClick={handleShow}>{show ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</p>
                            </label>

                            <input className='btn bg-rose-500 mt-5 border-none shadow-md' type="submit" value="Login" />


                        </div>
                    </form>

                    <div className="divider text-white">OR</div>
                    <hr />

                    <h4 className='mt-6 text-white'>Login With</h4>
                    <div className='text-center'>
                        <button onClick={handleGoogleSignIn} className='p-3 rounded-md bg-gradient-to-r from-red-600 via-yellow-500 to-green-500 border-none w-9/12 mt-3'>

                            <FaGoogle className=' text-blue-600 inline mr-2 text-2xl'></FaGoogle> Google</button>
                    </div>

                    <p className='text-red-500 my-2'>{error}</p>

                    <p className='text-white'>New to Toy Wala? please  <Link className='underline text-blue-400 font-bold' to='/register'>Register</Link></p>

                </div>





            </div>
        </div>
    );
};

export default Login;