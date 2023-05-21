
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const UpdateToy = () => {

    // get toy info using loader data
    const toy = useLoaderData();
    const { photoUrl, _id, toyName, price, ratings, quantity, details } = toy;



    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        fetch(`http://localhost:5000/toy-car/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    Swal.fire(
                        'Success',
                        'Toy info update successfully',
                        'success'
                    )
                }
            })
    };



    return (
        <div>

            {/* dynamic title */}
            <Helmet>
                <title>UpdateToy-Toy wala</title>
            </Helmet>
            <div>
                <h2 className="text-center text-3xl">Update {toyName} information.</h2>
                <img className="max-w-[70vw] mx-auto max-h-[40vh] rounded-lg my-5" src={photoUrl} alt={toyName} />
                <div className="w-11/12 bg-blue-50 p-5 rounded-lg lg:w-9/12 mx-auto my-10">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            <div>
                                <label>Price</label>
                                <input className="border block shadow-md rounded-md w-full my-3 p-3" defaultValue={price}  {...register("price", { required: true })} />
                            </div>


                            <div>
                                <label>Ratings</label>
                                <input className="border block shadow-md rounded-md w-full my-3 p-3" defaultValue={ratings} {...register("ratings")} />
                            </div>

                            <div>
                                <label>Available quantity</label>
                                <input className="border block shadow-md rounded-md w-full my-3 p-3" defaultValue={quantity} {...register("quantity", { required: true })} />
                            </div>

                            <div>
                                <label>Description</label>
                                <input className="border block shadow-md rounded-md w-full my-3 p-3" defaultValue={details} {...register("details", { required: true })} />
                            </div>


                            <div className="col-span-2 text-center">
                                <input className="btn bg-green-500 border-none w-3/4 " type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;