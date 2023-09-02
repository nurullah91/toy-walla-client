import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const imageHostingToken = import.meta.env.VITE_Image_Hosting_Token;
const AddReview = () => {

    const [disabled, setDisabled] = useState(false)
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        setDisabled(true);

        const formData = new FormData();
        formData.append("image", data.customerImg[0]);

        fetch(imageHostingUrl, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.data.display_url) {
                    data.customerImg = imageResponse.data.display_url;
                    data.ratings = parseFloat(data.ratings)

                    fetch(`https://toy-wala-server.vercel.app/add-review`, {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(data)

                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.acknowledged === true) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Review added',
                                    showConfirmButton: false,
                                    timer: 1000
                                })
                                reset()
                                setDisabled(false)
                            }
                            else {
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Something went wrong. Please try again'
                                })
                                setDisabled(false)
                            }
                        })
                }
            })

    };



    return (
        <div className="w-11/12 bg-blue-50 p-5 rounded-lg lg:w-9/12 mx-auto my-10">
            {/* dynamic tittle  */}
            <Helmet>
                <title>Add Review-Toy wala</title>
            </Helmet>
            <h3 className="text-4xl font-bold text-center text-rose-400 my-10 ">Please Add a Review</h3>

            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div>
                        <label>Your Name</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" placeholder="Enter your name" {...register("name", { required: true })} />
                    </div>
                    <div>
                        <label>Your ratings</label>

                        <input className="border block shadow-md rounded-md w-full my-3 p-3" placeholder="5" {...register("ratings", { required: true })} />
                    </div>

                    <div className='col-span-2 '>
                        {/* textarea textarea-bordered textarea-lg w-full max-w-xs */}
                        <label>Your review</label>
                        <textarea placeholder="Write your review" rows={5} className="border shadow-md rounded-md w-full mt-3 p-3"  {...register("review", { required: true })} />
                    </div>

                    <div>
                        <label>Upload your Photo</label>
                        <input type='file' className="file-input file-input-bordered w-full  block " {...register("customerImg", { required: true })} />
                    </div>

                    <div className="col-span-2 text-center">
                        <input disabled={disabled} className="btn bg-rose-400 border-none w-3/4 " value="Add Review" type="submit" />
                    </div>
                </div>
            </form>


        </div>
    );
};

export default AddReview;