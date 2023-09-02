import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const imageHostingToken = import.meta.env.VITE_Image_Hosting_Token;

const AddGalleryPhoto = () => {

    const handleAddPhoto = (e) => {
        e.preventDefault();
        const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`
        const photo = e.target.photo.files[0]

        const formData = new FormData();
        formData.append("image", photo)
        console.log(formData);

        fetch(imageHostingUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                if (imageResponse.data.display_url) {

                    const imageInfo = { img: imageResponse.data.display_url }
                    fetch("https://toy-wala-server.vercel.app/add-gallery-photo", {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(imageInfo)
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.nsertedId) {
                                Swal.fire(
                                    'Success!',
                                    'Image upload to photo gallery successfully!',
                                    'success'
                                )
                                e.target.reset();
                            }
                            else{
                                Swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: 'Something went wrong. Please try again'                                    
                                  })
                            }
                        })
                }

            })


    }


    return (
        <div className="min-h-[calc(100vh-64px)] custom-bg flex justify-center items-center">
            {/* dynamic tittle  */}
            <Helmet>
                <title>Add Photo-Toy wala</title>
            </Helmet>

            <div className='w-9/12 mx-auto lg:w-1/4 bg-[#69a6e784] shadow-md p-5 rounded-lg '>

                <h3 className="text-4xl font-bold text-center text-rose-500 my-10 ">Please upload a photo</h3>

                <form onSubmit={handleAddPhoto} className="text-center pb-5">
                    <input required name="photo" type="file" className="file-input border-2 border-rose-500  w-full max-w-xs" />
                    <input className="block bg-rose-400 text-white px-5 py-3 mt-5 rounded-md mx-auto" type="submit" value="Add photo" />
                </form>
            </div>


        </div>
    );
};

export default AddGalleryPhoto;