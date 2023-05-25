import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const AddToy = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        fetch(`https://toy-wala-server.vercel.app/addtoy`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged === true) {
                    Swal.fire(
                        'Done',
                        'Your Product added Successfully',
                        'success'
                    )
                }
            })
    };



    return (
        <div className="w-11/12 bg-blue-50 p-5 rounded-lg lg:w-9/12 mx-auto my-10">

            {/* dynamic title */}
            <Helmet>
                <title>AddToy-Toy wala</title>
            </Helmet>


            <h2 className="text-center text-4xl my-5 font-bold text-rose-500">Add a Toy</h2>


            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div>

                        <label>Toy Name</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" defaultValue="Toy Name" {...register("toyName")} />
                    </div>

                    <div>
                        <label>Seller Name</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" value={user?.displayName} {...register("sellerName", { required: true })} />
                    </div>

                    <div>
                        <label>Email</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" value={user?.email} {...register("email")} />
                    </div>

                    <div>
                        <label>Sub Category</label>

                        {/* <select id="selected" className="select select-bordered w-full max-w-xs">
                            <option disabled selected>Who shot first?</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select> */}


                        <input className="border block shadow-md rounded-md w-full my-3 p-3" defaultValue="racing" {...register("subCategory", { required: true })} />
                    </div>

                    <div>
                        <label>Price</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3"  {...register("price", { required: true })} />
                    </div>

                    <div>
                        <label>Toy Photo URL</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" {...register("photoUrl", { required: true })} />
                    </div>

                    <div>
                        <label>Ratings</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" {...register("ratings")} />
                    </div>

                    <div>
                        <label>Available quantity</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" {...register("quantity", { required: true })} />
                    </div>

                    <div className="col-span-2">
                        <label>Description</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" {...register("details", { required: true })} />
                    </div>


                    <div className="col-span-2 text-center">
                        <input className="btn bg-green-400 border-none w-3/4 " value="Add toy" type="submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddToy;