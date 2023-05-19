import { useContext } from "react";
import Select from 'react-select';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";


const AddToy = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const { user } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.category = selectedOption;
        console.log(data)
        fetch(`http://localhost:5000/addtoy`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };



    const options = [
        { subCategory: 'Racing Cars', label: 'Racing Cars' },
        { subCategory: 'Emergency Vehicles', label: 'Emergency Vehicles' },
        { subCategory: 'Sports Cars', label: 'Sports Cars' },
        { subCategory: 'Monster Trucks', label: 'Monster Trucks' },
        { subCategory: 'Police Cars', label: 'Police Cars' }
    ];

    return (
        <div className="w-11/12 lg:w-9/12 mx-auto my-10">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <div>

                        <label>Toy Name</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" defaultValue="Toy Name" {...register("toyName")} />
                    </div>

                    <div>
                        <label>Seller Name</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" {...register("sellerName", { required: true })} />
                    </div>

                    <div>
                        <label>Email</label>
                        <input className="border block shadow-md rounded-md w-full my-3 p-3" value={user?.email} {...register("email")} />
                    </div>

                    <div>
                        <label>Sub Category</label>

                        <Select
                            className="border block shadow-md rounded-md w-full my-3 p-3"
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                          
                        />

{/* 
                        <input {...register("subCategory", { required: true })} /> */}
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
                        <input className="btn btn-secondary w-3/4 " type="submit" />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddToy;