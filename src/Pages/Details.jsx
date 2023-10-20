import { useContext, useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import Navber from "../Components/Navber";

import Swal from 'sweetalert2'
import { AuthContext } from "../Providers/AuthProvider";
import Footer from "../Components/Footer";
import Article from "../Components/Article";



const Details = () => {

  //get the matched products
    const products=useLoaderData()
    const {id}=useParams()
    const {user}=useContext(AuthContext);
   
    const [product,setProduct]=useState({})
    useEffect(()=>{
        const findProduct=products.find(service=>service._id===id)
        setProduct(findProduct)
    },[id,products])
    
  const {name,brandName,img,type,price,rating,des}=product

  // add product to database
  const email=user.email;
  const usersAdd={name,brandName,img,type,price,rating,des,email}
    const handleAdd=()=>{
      fetch('https://server-site-kqfkuzq5h-sumaiyas-projects.vercel.app/usersProducts/',{
        method:'POST',
        headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(usersAdd),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'A Product is successfully added to cart',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            
          });
      
    
}
    
    
        return(
            <>
            <Navber></Navber>
   <div className="bg-base-200">
   <div className="hero min-h-screen  max-w-6xl mx-auto p-4 md:p-0">
      <div className="hero-content flex-col lg:flex-row-reverse mt-10 items-center">
    <div className=" h-[300px]">
    <img src={img} className=" rounded-lg shadow-2xl h-full " />
    </div>
    <div>
        
      <h1 className="md:text-4xl text-2xl font-bold my-5">Name of the product:<span className="text-red-900 my-5">{name}</span></h1>
      <p  className="md:text-2xl text-2xl font-bold mt-5">Brand:{brandName}</p>
      <p  className="md:text-2xl text-2xl font-bold my-5">Type:{type}</p>
      <p  className="md:text-2xl text-2xl font-bold my-5">Price:{price}$</p>
      <p className="py-6">{des}</p>
      
     <button className="btn   md:w-1/5 w-full border hover:border-red-900  text-red-900 rounded-lg border-red-900" onClick={handleAdd}>Add to cart</button>
    </div>
  </div>

  
</div>

<Article></Article>
   </div>
 <Footer></Footer>
            </>
        )
    
        
};

export default Details;