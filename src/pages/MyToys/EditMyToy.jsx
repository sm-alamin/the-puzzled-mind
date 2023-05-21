import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const EditMyToy = () => {
    const [toyInfo, setToyInfo] = useState(
        {
            price: "",
            availableQuantity: "",
            description: ""
          }
    );
    const {id} = useParams();
    console.log(id)
    useEffect(()=> {
        fetch(`https://the-puzzled-mind-server.vercel.app/all-toys/${id}`)
        .then(res=>res.json())
        .then(data=> {
            setToyInfo({
                price: data.price,
                availableQuantity: data.availableQuantity,
                description: data.description,
              });
        })
    },[id])
    const handleUpdateToy = (event) => {
        event.preventDefault();
        const form = event.target;

        const price = form.price.value;
        const availableQuantity = form.quantity.value;
        const description = form.description.value;
    
        const updatedToyInfo  = {
          price: price,
          availableQuantity: availableQuantity,
          description: description,
        };
        console.log(updatedToyInfo);
    
        fetch(`https://the-puzzled-mind-server.vercel.app/all-toys/${id}`,{
          method: 'PATCH', 
                headers: {
                    'content-type': 'application/json'
                }, 
            body:JSON.stringify(updatedToyInfo)
        })
        .then(res=> res.json())
        .then(data=> {
          console.log(data)
          if(data.modifiedCount > 0){
            alert("toy is updated successfully")
          }
        })
      };
    return (
        <div className="container mx-auto p-4">
      <div className="flex flex-col justify-center items-center text-center">
        <svg width="381px" height="75px" viewBox="0 0 381 75" className="ml-72">
          <path
            className="t1"
            d="M2.96134624,65.979 C1.30734624,68.168 -0.0246537556,70.238 0.000346244358,70.579 C0.0373462444,71.074 0.0833462444,71.061 0.226346244,70.517 C0.325346244,70.142 2.32934624,68.809 4.68034624,67.557 C21.7323462,58.472 29,49.5 30.5243462,43.37 C32.7648571,34.3600186 24.6903462,10.361 17.7673462,0.945 L17.0733462,0 L17.3113462,1.4 C21.7833462,27.758 17.5933462,46.612 2.96134624,65.979 Z"
            id="path4-path"
            fill="#88CAE4"
          />
          <path
            className="t2"
            d="M0.5,70 C19,69.5 41.5782056,59.6126527 40.3698601,59.9188561 C39.8667833,60.0464299 43.1233331,57.934635 44.5,55.5 C49.5084857,46.6385272 48.5156445,24.083968 45.228048,12.4592968 L44.8989061,11.2929738 L44.5913856,12.6833436 C38.7927365,38.8562499 19,60.5 0.5,70 Z"
            id="path4-path-copy"
            fill="#42ADD7"
          />
          <path
            className="t3"
            d="M2.276,69.382 C5.358,72.464 6.7,72.765 20.2,73.404 C34.559,74.084 45.182,73.011 49.577,70.435 C58.224,65.367 62.311,57.704 62.878,45.5 C63.161,39.379 63.051,39.253 60.602,42.913 C56.842,48.534 50.617,53.972 44.31,57.146 C29,68 -0.197,66.909 2.276,69.382 Z"
            id="path3"
            fill="#1A94C8"
          />
        </svg>
        <h3 className="text text-center py-2 px-2 bg-indigo-50 text-indigo-500 text-xl font-medium tracking-widest mx-auto w-96 relative top-5 rounded-full">
          Update Toy
        </h3>
      </div>

      <form
        onSubmit={handleUpdateToy}
        className="w-full grid grid-cols-2 gap-6 mx-auto bg-white p-6 rounded shadow-custom"
      >
        

        
        
        

        
        <div className="">
          <label htmlFor="price" className="block font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Write Price of Toy"
            defaultValue={toyInfo.price}
            required
            className="mt-1 block  field-input  w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

       

        <div className="">
          <label htmlFor="quantity" className="block font-medium text-gray-700">
            Available Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            defaultValue={toyInfo.availableQuantity}
            required
            placeholder="Write Available Quantity"
            className="mt-1 block  field-input  w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="">
          <label
            htmlFor="description"
            className="block font-medium text-gray-700"
          >
            Detail Description
          </label>
          <textarea
            id="description"
            name="description"
            placeholder="Write Toy Detail Description"
            defaultValue={toyInfo.description}
            required
            rows="4"
            className="mt-1 block  field-input  w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="px-4 py-2 bg-slate-400 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Update Toy
          </button>
        </div>
      </form>
    </div>
    );
};

export default EditMyToy;