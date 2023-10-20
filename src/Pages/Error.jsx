import { NavLink } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <div>
            <div className="space-y-5 my-20">
         
         <h1 className="text-center font-semibold text-2xl md:text-4xl">Oooops ....</h1>
          <p className="font-extrabold text-red-700 text-center md:text-5xl text-3xl">404 Error Page</p>
          <p className="text-center md:text-lg">Sorry the page you are looking for does not exit .</p>
          <div className="text-center px-4 py-4  bg-slate-500 text-white w-2/12 mx-auto rounded-lg"><NavLink to={'/'}>Go to home page</NavLink></div>
        
       </div>
        </div>
        </div>
    );
};

export default Error;