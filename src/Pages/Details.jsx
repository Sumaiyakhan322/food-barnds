import { useContext, useEffect, useState } from "react";
import {  useLoaderData, useParams } from "react-router-dom";
import Navber from "../Components/Navber";

import Swal from 'sweetalert2'
import { AuthContext } from "../Providers/AuthProvider";



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
      fetch('http://localhost:5000/usersProducts/',{
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
   </div>
   <div className="max-w-6xl mx-auto md:my-36 my-20 p-4 md:p-0">
 
  <section className="mb-32">
  <h2 className="font-bold text-red-900 text-center text-2xl md:text-5xl  ">Our features</h2>
        <hr
      className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-25 dark:opacity-100"
       />
    <div className="flex flex-wrap">
      <div className="mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:mb-0 lg:w-4/12">
        
        <h2 className="mb-6 text-3xl font-bold">
          Why is it so <u className="text-red-900 ">
            great?</u>
        </h2>

        <p className="mb-12 text-neutral-500 ">
        The company oversees a diverse portfolio of well-known food and beverage brands, catering to a wide range of consumer preferences.
        </p>
      </div>

      <div className="mb-md-0 mb-6 w-full shrink-0 grow-0 basis-auto px-3 lg:w-8/12">
        <div className="flex flex-wrap">
          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
            <div className="flex">
              <div className="shrink-0">
                <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-red-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-3 font-bold">Global Reach</p>
                <p className="text-neutral-500 ">
                The company operates internationally, with its products available in numerous countries, allowing for a broad and diverse customer base.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
            <div className="flex">
              <div className="shrink-0">
                <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-red-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-3 font-bold">Sustainability Initiatives </p>
                <p className="text-neutral-500 ">
                The company is actively engaged in sustainability efforts, including responsible sourcing, environmental stewardship, and corporate social responsibility.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
            <div className="flex">
              <div className="shrink-0">
                <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-red-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-3 font-bold">Extensive Distribution Network</p>
                <p className="text-neutral-500 ">
                Its products are widely available through an established distribution network, ensuring accessibility to consumers through various channels
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:w-6/12 lg:px-3">
            <div className="flex">
              <div className="shrink-0">
                <div className="mb-6 inline-block rounded-md bg-primary-100 p-4 text-red-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                    stroke="currentColor" className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                </div>
              </div>
              <div className="ml-4 grow">
                <p className="mb-3 font-bold">Marketing Excellence</p>
                <p className="text-neutral-500 ">
                The company invests significantly in marketing and advertising to build brand awareness and drive sales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
</div>
            </>
        )
    
        
};

export default Details;