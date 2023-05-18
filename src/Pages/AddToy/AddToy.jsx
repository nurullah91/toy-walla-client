import { useForm } from "react-hook-form";


const AddToy = () => {

    const { register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data)
        fetch(`http://localhost:5000/addtoy`,{
            method:"POST",
            headers:{
            'content-type':  'application/json'
            },
            body:JSON.stringify(data)     

        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result);
        })
    };


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Toy Name</label>
                <input className="border block my-3 p-3" defaultValue="Toy Name" {...register("toyName")} />

                <label>Seller Name</label>
                <input className="border block my-3 p-3" {...register("sellerName", { required: true })} />


                <label>Email</label>
                <input className="border block my-3 p-3" defaultValue="Seller email" {...register("email")} />

                <label>Sub Category</label>
                <input className="border block my-3 p-3" {...register("subCategory", { required: true })} />


                <label>Price</label>
                <input className="border block my-3 p-3"  {...register("price", { required: true })} />

                <label>Toy Photo URL</label>
                <input className="border block my-3 p-3" {...register("photoUrl", { required: true })} />


                <label>Ratings</label>
                <input className="border block my-3 p-3" {...register("ratings")} />

                <label>Available quantity</label>
                <input className="border block my-3 p-3" {...register("quantity", { required: true })} />


                <label>Description</label>
                <input className="border block my-3 p-3" {...register("details", { required: true })} />



{/*  */}

                <input className="btn btn-secondary" type="submit" />
            </form>
        </div>
    );
};

export default AddToy;