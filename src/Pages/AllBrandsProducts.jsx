import img1 from "../assets/advertising1.jpg";
import img2 from "../assets/adveritising2.jpg";
import img3 from "../assets/advertering3.jpg";
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Carousel, Rating } from "@material-tailwind/react";

const AllBrandsProducts = () => {
  const allBrands = useLoaderData();
  const { brandName } = useParams();
  
  const [products, setProducts] = useState([]);
  const [noProduct, setNoProduct] = useState("");
  useEffect(() => {
    const matchedOProducts = allBrands.filter(
      (product) => product.brandName == brandName
    );
    if (matchedOProducts.length > 0) {
      setProducts(matchedOProducts);
    } else {
      setNoProduct(`There is no product corresponding to the brand `);
    }
  }, [brandName, allBrands]);
 
  return (
    <div>
      <div>
        <div>
          <Carousel
            transition={{ duration: 2 }}
            className=""
            loop="true"
            autoplay="true"
          >
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(${img1})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="hero-overlay bg-opacity-80"></div>
              <div className="hero-content text-left text-neutral-content">
                <div className="w-4/6">
                  <h1 className="mb-5 md:text-5xl font-bold text-2xl text-red-400">Discover Delectable Delights</h1>
                  <p className="mb-5">
                  Explore a world of culinary wonders on our food and beverage brands website. From mouthwatering recipes to premium beverages, indulge in a symphony of flavors that will tantalize your taste buds
                  </p>
                  <a className="mb-2 inline-block rounded-full border-2 border-red-400 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
              data-te-ripple-init data-te-ripple-color="light" href="#!" role="button"  ><Link to='/register' >To Join us</Link></a>
                </div>
              </div>
            </div>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(${img2})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="hero-overlay bg-opacity-80"></div>
              <div className="hero-content text-left text-neutral-content">
                <div className="w-4/6">
                  <h1 className="mb-5 md:text-5xl font-bold text-2xl text-red-400">Satisfy Your Cravings, With 20% discount</h1>
                  <p className="mb-5">
                  Craving something delicious? Our website is a treasure trove of food and beverage brands that offer a diverse range of gourmet goodies. Find your favorites and savor the convenience of online shopping.
                  </p>
                  <a className="mb-2 inline-block rounded-full border-2 border-red-400 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
              data-te-ripple-init data-te-ripple-color="light" href="#!" role="button"  ><Link to='/register' >To Join us</Link></a>
                </div>
              </div>
            </div>
            <div
              className="hero min-h-screen"
              style={{
                backgroundImage: `url(${img3})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="hero-overlay bg-opacity-80"></div>
              <div className="hero-content text-left text-neutral-content">
                <div className="w-4/6">
                  <h1 className="mb-5 md:text-5xl font-bold  text-2xl text-red-400">Elevate Your Culinary Experience</h1>
                  <p className="mb-5">
                  Elevate your dining experience with our curated selection of food and beverage brands. From artisanal treats to top-notch drinks, our website brings culinary excellence to your doorstep. Explore and elevate your taste journey today
                  </p>
                  <a className="mb-2 inline-block rounded-full border-2 border-red-400 px-[46px] pt-[14px] pb-[12px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 md:mr-2 md:mb-0"
              data-te-ripple-init data-te-ripple-color="light" href="#!" role="button"  ><Link to='/register' >To Join us</Link></a>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        <h2 className="font-bold text-red-900 text-center text-2xl md:text-5xl   mt-20">All Products of : {brandName}</h2>
        <hr
      className="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-red-900 to-transparent opacity-25 dark:opacity-100"
       />
          <div className="grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto p-4 md:p-0 gap-10 my-20 "> 
          
          
          {products.map((pd) => (
          <>
           

            <div className="card lg:card-side bg-brown-50-50 shadow-xl  md:h-[360px] brands">
              <figure className=" md:w-5/12 w-full">
                <img className=" h-[200px] md:h-full w-full"
                src={pd.img}
                  alt="Product"
                />
              </figure>
              <div className="card-body text-lg">
                <h2 className=" text-xl">Name:<span className="font-bold text-red-900 brandName">{pd.name}</span></h2>
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
               <Link to={`/update/${pd._id}`}><button className=" btn  border-red-900  border hover:border-red-900  text-red-900">Update</button></Link>   
                  <Link to={`/details/${pd._id}`}><button className="btn  border hover:border-red-900  text-red-900">Details </button></Link>
                  
                </div>
              </div>
            </div>
          </>
        ))}</div>
       
        {noProduct && (
          <div className="my-20 text-center font-bold md:text-3xl text-xl space-y-6 max-w-6xl mx-auto p-4 md:p-0">
            <p>
              {noProduct}: <span className=" text-red-900">{brandName}</span>
            </p>
            <h2>Please add product: </h2>
            <button className="btn  mx-auto block md:w-1/5 w-full border hover:border-red-900 my-10 text-red-900">
              <Link to="/addProduct">Add</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBrandsProducts;
