import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const products=useLoaderData()
    const {id}=useParams()
    const [product,setProduct]=useState({})
    useEffect(()=>{
        const findProduct=products.find(service=>service.id===id)
        setProduct(findProduct)
    },[id,products])

    const {name}=service
    return (
        <div>
           
        </div>
    );
};

export default Details;