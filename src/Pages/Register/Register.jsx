
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser, setPhoto, setUserName } = useContext(AuthContext);


    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const password = form.password.value;
        const email = form.email.value;
        const photoUrl = form.photo.value;
        console.log(name, email, photoUrl, password);

        if (password.length < 6) {
            setError("Password should be more than 6 character")
        }
        else {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    updateUser(user, photoUrl,name);
                   setError('');
                   form.reset()
                })
                .catch(err => {
                    setError(err.message)
                    console.log(err);

                })
        }

    }


    const updateUser = (user, photoUrl, name) =>{
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl

        })
        .then(
            setPhoto(photoUrl),
            setUserName(name)
        )
        .catch(err =>{
            console.log(err);
        })

    }


    return (
        <div className='text-center'>
            <h2 className="text-5xl font-bold text-rose-600">Register page</h2>


            <div className=' w-9/12 mx-auto lg:w-1/4 bg-rose-300 p-5 my-5 rounded-lg'>
                <form onSubmit={handleRegister}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="text" name='name' placeholder="Enter your Name" className="input input-bordered" />
                        </label>

                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="email" name='email' placeholder="Enter your Email" className="input input-bordered" />
                        </label>


                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered" />
                        </label>


                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group input-group-vertical">
                            <input type="url" name='photo' placeholder="Enter your Photo url" className="input input-bordered" />
                        </label>


                        <input className='btn bg-red-500 mt-3 border-none shadow-md' type="submit" value="Register" />

                        <h4 className='my-3 text-red-600'>{error}</h4>

                    </div>
                </form>
                <p>Already have an account? <Link className='underline text-blue-800 font-bold' to='/login'>Login</Link></p>
            </div>



        </div>
    );
};

export default Register;