import {  useEffect,useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Navber from "../Components/Navber";
import { Rating } from "@material-tailwind/react";




const MyCart = () => {
    const allProducts=useLoaderData();
    const  {email}=useParams();
    console.log(allProducts,email);
   
    const [Cartproducts, setCartProducts] = useState([]);
    const [noCartProduct, setCartNoProduct] = useState("");
    useEffect(() => {
      const matchedProducts = allProducts.filter(
        (product) => product.email == email
      );
      if (matchedProducts.length > 0) {
        setCartProducts(matchedProducts);
      } else {
        setCartNoProduct(` No product is added to cart corresponding to the brand `);
      }
    }, [allProducts,email]);
    console.log(Cartproducts);
    return (
        <div>
           <Navber></Navber>    
        <h2 className="font-bold text-red-900 text-center text-2xl md:text-5xl   mt-20">All selected Products</h2>
        <hr
      className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-25 dark:opacity-100"
       />
          <div className="grid grid-cols-1 md:grid-cols-1 max-w-6xl mx-auto p-4 md:p-0 gap-10 my-20 ">
            {Cartproducts.map(pd=><div key={pd._id}>
                
            <div className="card lg:card-side bg-brown-50-50 shadow-xl  md:h-[360px]">
              <figure className=" md:w-5/12 w-full">
                <img className=" h-[200px] md:h-full w-full"
                src={pd.img}
                  alt="Product"
                />
              </figure>
              <div className="card-body text-lg">
                <h2 className=" text-xl">Name:<span className="font-bold text-red-900">{pd.name}</span></h2>
                <p>Type:<span className="font-bold" >{pd.type}</span></p>
                <p>Price:<span className="font-bold">{pd.price}$</span></p>
                <p>Brand-Name:<span className="font-bold">{pd.brandName}</span></p>
                <div className="flex items-center">
                <span className="">Ratings:
                  </span>
                  <span><Rating
                unratedColor="red" ratedColor="red"
              style={{ maxWidth: 50}}
              value={parseFloat(pd.rating)}
              
             readonly
            /></span> 
                </div>

                <div className="card-actions my-4 ">
               <Link><button className=" btn  border-red-900  border hover:border-red-900  text-red-900">Delete</button></Link>   
                  
                  <button></button>
                </div>
              </div>
            </div>
             
                       
            
            </div>)}

            {noCartProduct && (
          <div className="my-20 text-center font-bold md:text-3xl text-xl space-y-6 max-w-6xl mx-auto p-4 md:p-0">
            <p>
              {noCartProduct}: <span className=" text-red-900">{email}</span>
            </p>
            <h2>Please add  product  to cart: </h2>
            <button className="btn  mx-auto block md:w-1/5 w-full border hover:border-red-900 my-10 text-red-900">
              <Link to="/">Add</Link>
            </button>
          </div>
        )}
            
            </div>   
        </div>
    );
};

export default MyCart;