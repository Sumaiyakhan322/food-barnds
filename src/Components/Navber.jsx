import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import { useContext } from "react";
import  { AuthContext } from "../Providers/AuthProvider";

const Navber = () => {
  const {user,SignOutUser}=useContext(AuthContext)
  
   const email=user?.email 
  
  const handleSignOut=(e)=>{
   
    e.preventDefault();
    SignOutUser()
    .then()
    .catch()
  }
    const navLinks=<>
    
    <li className="hover:bg-red-200 rounded-lg"><NavLink to='/' className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-red-800" : ""
}>Home</NavLink></li>
    <li className="hover:bg-red-200 rounded-lg"><NavLink to='/addProduct' className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-red-800" : ""
}>Add Product</NavLink></li>
    <li className="hover:bg-red-200 rounded-lg"><NavLink to={`/myCart/${email}` }className={({ isActive, isPending }) =>
isPending ? "pending" : isActive ? "text-red-800" : ""
}>Cart</NavLink></li>
</>
    return (
        <div>
             <div className="">
   <div className="navbar p-4 sticky inset-0 z-10  flex flex-col gap-5 md:flex-row justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 font-bold text-lg space-x-2 ">
           {navLinks}
            </ul>
          </div>
         <img src={logo} className='md:w-22 md:h-16 w-15 h-10 rounded-md' alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-bold text-lg space-x-2">
          {navLinks}
          </ul>
        </div>
        <div className="md:navbar-end mx-auto">
        {user ? (
            <>
             <div className="flex items-center space-x-2">
             <div className="flex items-center space-x-2">
               <p className="font-bold text-lg ">{user?. displayName}</p>
                <img src={user?.photoURL} alt="" className="md:h-20 md:w-20 h-10 w-10 rounded-full"/>
               </div>
                <button className="btn text-black hover:bg-white hover:text-red-400 font-bold border  hover:border-red-400 " onClick={handleSignOut}>SignOut</button>
             </div>
              
            </>
          ) : (
            <Link to="/login">
              <button className="btn text-black border  border-red-400   hover:bg-white hover:text-red-400 font-bold">Login</button>
            </Link>
          )}
        
        </div>
      </div>
      </div> 
        </div>
    );
};

export default Navber;