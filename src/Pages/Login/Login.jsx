
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
        const email = form.email.value;
        console.log(email, password);
    }

    return (
        <div className='text-center'>
            <h2 className="text-5xl font-bold text-rose-600 mb-5">Login page</h2>


            <div className='w-9/12 mx-auto lg:w-1/4 bg-rose-300 p-5 my-5 rounded-lg'>
                <form onSubmit={handleLogin}>
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name='email' placeholder="Enter your Email" className="input input-bordered" />
                        </label>


                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" />
                        </label>

                        <input className='btn bg-red-500 mt-3 border-none shadow-md' type="submit" value="Login" />


                    </div>
                </form>

                <div className="divider">OR</div>

                <h4>Login With</h4>
               <div className='text-center'>
               <button className='btn bg-red-500 border-none w-9/12 mt-3'><FaGoogle className='text-green-600 inline-flex mr-2 text-2xl'></FaGoogle> Google</button>
               </div>
               <p>New to Toy Wala? please  <Link className='underline text-blue-800 font-bold' to='/register'>Register</Link></p>

            </div>





        </div>
    );
};

export default Login;