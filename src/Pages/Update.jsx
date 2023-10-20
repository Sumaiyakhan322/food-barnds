import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import Navber from "../Components/Navber";


const Update = () => {
    const product=useLoaderData();
     const {name,brandName,img,type,price,rating,des,_id}=product;
     const handleUpdateAdd=e=>{
        e.preventDefault();
        const name=e.target.name.value;
        const brandName=e.target.brandName.value;
        const img=e.target.img.value;
        const type=e.target.type.value;
        const price=e.target.price.value;
        const rating=e.target.rating.value;
        const des=e.target.des.value;
        const newProduct={name,brandName,img,type,price,rating,des}
       
        fetch(`https://server-site-kqfkuzq5h-sumaiyas-projects.vercel.app/products/${_id}`,{
            method:'PUT',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(newProduct),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                if(data.modifiedCount>0){
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'A Product is successfully added',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
                
              });
            
        
    }

    return (
        <div>
            <>
   <Navber></Navber>
    <div className="max-w-6xl mx-auto md:p-0 p-4">
     
      <h2 className="font-bold text-red-900 text-center text-2xl md:text-5xl my-10 ">
        Update Products
      </h2>
      <hr className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-25 dark:opacity-100" />
      {/* form  */}
      <div>
        <form onSubmit={handleUpdateAdd}>
            {/* name and brand name */}
          <div className="flex flex-col md:flex-row gap-10 my-10">
          <div className="relative h-12 w-full">
    <input
      className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-900  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder="name" type="text" name="name" defaultValue={name} 
    />
  
  </div>
  <div className="relative h-12 w-full">
    <input
      className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-900  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" " type="text" name="brandName" defaultValue={brandName}
    />
    
  </div>
          </div>
          {/* Img and type */}
          <div className="flex flex-col md:flex-row gap-10 my-10">
          <div className="relative h-12 w-full">
    <input 
      className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-900  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" " type="text" name="img" defaultValue={img}
    />
    
  </div>
  <div className="relative h-12 w-full">
    <input
      className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-900  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" " name="type" type="text" defaultValue={type}
    />
  
  </div>
          </div>
          {/* price and rating */}
          <div className="flex flex-col md:flex-row gap-10 my-10">
          <div className="relative h-12 w-full">
    <input
      className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-900  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" " type="number" name="price" defaultValue={price}
    />
    
  </div>
  <div className="relative h-12 w-full">
    <input
      className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-900  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" " type="number" name="rating" defaultValue={rating}
    />
  
  </div>
          </div>

          <div className="relative h-32 w-full my-10">
    <input
      className="peer h-full w-full rounded-[7px] border border-blue-gray-200  bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-red-900  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" " type="text" name="des" defaultValue={des}
    />
  
  </div>
         
     <input type="submit" value='Update Product' className="btn  mx-auto block md:w-1/5 w-full border hover:border-red-900 my-10 text-red-900" />  
          
        </form>
      </div>
    </div>
    </>
        </div>
    );
};

export default Update;