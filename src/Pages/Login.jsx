import { Link, useLocation, useNavigate } from 'react-router-dom';
import backgroundImg from '../assets/banner2.jpg'
import Swal from 'sweetalert2'
import { AuthContext } from '../Providers/AuthProvider';
import { useContext, useState } from 'react';
import '../../src/Styles/box.css'

const Login = () => {
    const {loginUser}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
    const [error,setError]=useState('')
    const handleLogIn=(e)=>{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        setError('');
         loginUser(email,password)
         .then(()=>{
            Swal.fire({
                position: 'center',
                icon: 'success',
               
                title: 'Successfully register by email and password ',
              
                
                showConfirmButton: false,
                timer: 1500
              })
              e.target.reset();
              navigate(location?.state ? location.state :'/')
        })
        .catch((error) => {
         const errormessage=error.message;
         (errormessage && setError('Give correct  email and password'));

});

          
        
      
    }
    // style={{backgroundImage:`url(${backgroundImg})`}}
    return (
        <div>
            <div className="flex justify-center" >
     
        <div className="hero-content text-center text-neutral-content w-full ">
          <div className="md:w-2/4 w-full ">
            <h2 className='text-red-400 my-10 font-bold md:text-4xl text-2xl'>Please Log in </h2>
          <div className=' rounded-3xl '>
          <div className="card w-full  shadow-2xl  box ">
          <form className="card-body text-xl " onSubmit={handleLogIn}>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Email:</span>
          </label>
          <input type="email" placeholder="email" className="input login input-bordered input-error text-black bg-white  " required  name='email'/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl">Password:</span>
          </label>
          <input type="password" placeholder="password" className="input login input-bordered input-error text-black bg-white" name='password' required />
          
        </div>
        {error && <p className='text-red-500 '>{error}</p>}
        <div className="form-control mt-6">
          <button className="btn bg-gradient-to-r from-red-300 to-red-900  hover:bg-white hover:border hover:border-red-400 ">Login</button>
        </div>
       <p className='text-black'>Do not have any account ? Go to <Link className='text-red-400 underline' to='/register'>Register</Link></p>
      </form>
          </div>
          </div>
        
          </div>
        </div>
      </div>
        </div>
    );
};

export default Login;