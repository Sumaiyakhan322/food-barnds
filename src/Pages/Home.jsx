import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import Brands from "../Components/Brands";
import Navber from "../Components/Navber";



const Home = () => {
    const brands=useLoaderData()
    return (
        <div>
     <Navber></Navber>
     <Banner></Banner>
     <div className="max-w-6xl mx-auto my-20 p-4 md:p-0">
  
        <h2 className="font-bold text-red-900 text-center text-2xl md:text-5xl  ">Our brands</h2>
        <hr
      className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-25 dark:opacity-100"
       />
        <Brands brands={brands}></Brands>
        

     </div>
          
        </div>
    );
};

export default Home;