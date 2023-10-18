import { useSelect } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const AllBrandsProducts = () => {
   const allBrands=useLoaderData();
   const {brandName}=useParams()
   console.log(allBrands,brandName);
   const [products,setProducts]=useState([])
   useEffect(()=>{
    const matchedOProducts=allBrands.filter(product=>product.brandName==brandName)
     if(matchedOProducts){setProducts(matchedOProducts)}
   
   
   },[brandName,allBrands])
   console.log(products);
    return (
        <div>
            <div>
              <h1>{products.length}</h1>
                {products.map(pd=><>
                
                
                </>)} 
            </div>
        </div>
    );
};

export default AllBrandsProducts;