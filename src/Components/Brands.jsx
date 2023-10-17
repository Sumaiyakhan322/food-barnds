import { Link } from "react-router-dom";

const Brands = ({ brands }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
        {brands.map((brand) => (
          <>
          <Link to={`/brands/${brand.brandName}`}>  <div className="border border-red-200 shadow-lg rounded-lg h-full ">
              
              <p className="text-xl md:text-2xl text-center text-red-900 font-bold my-10  ">{brand.brandName}</p>
             <div className="w-1/2  mx-auto mb-10">
             <img src={brand.img} alt="" className="w-full h-full rounded-full " />
             </div>
            </div></Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Brands;
