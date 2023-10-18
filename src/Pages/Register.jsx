import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

import backgroundImg from "../assets/register.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import '../../src/Styles/box.css';

const Register = () => {
    const { createUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    const name = e.target.name.value;
    setError("");

    if (password.length < 6) {
      setError("The length of your password must be more than 6 digit");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Your password must have one Capital letter");
      return;
    } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
      setError("Your password must have one special character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: `${name}`,
          photoURL: `${photo}`,
        })
          .then((newResult) => {
            // Profile updated!
            console.log(newResult.user);
          })
          .catch(() => {});
        Swal.fire({
          position: "center",
          icon: "success",

          title: "Successfully register by email and password ",

          showConfirmButton: false,
          timer: 1500,
        });
        console.log(result);
        e.target.reset();
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          position: "center",
          icon: "success",

          title: "Successfully register by Google",

          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          position: "center",
          icon: "error",

          title: "Cannot register by Google",

          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
    return (
        <div>
            <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        <div className="hero-overlay bg-opacity-50 bg-slate-100"></div>
        <div className="hero-content text-center text-neutral-content w-full">
          <div className="md:w-2/4 w-full">
            <h2 className="text-red-400 my-4 font-bold md:text-4xl text-2xl">
              Please Register here{" "}
            </h2>
            <div className="card w-full  shadow-2xl bg-base-300 box">
              <form className="space-y-4 p-10" onSubmit={handleRegister}>
                {/* Name input */}
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered input-error md:w-3/4 w-11/12 text-black"
                  name="name"
                  required
                />
                {/* Image */}
                <input
                  type="text"
                  placeholder="Your Photo Url"
                  className="input input-bordered input-error md:w-3/4 w-11/12 text-black"
                  name="photo"
                  required
                />

                {/* <!-- Email input --> */}
                <input
                  type="text"
                  placeholder="Your email"
                  className="input input-bordered input-error md:w-3/4 w-11/12 text-black"
                  name="email"
                  required
                />

                {/* <!--Password input--> */}
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered input-error md:w-3/4 w-11/12 text-black"
                  name="password"
                  required
                />
                {error && <p className="text-red-500">{error}</p>}
                {/* <!-Image URL-->
              <input type="text" placeholder="Image Url" className="input input-bordered input-info w-full " name="photo" /> */}

                {/* <!-- Submit button --> */}

                <button
                  type="submit"
                  className="inline-block md:w-1/2 w-11/12 rounded bg-gradient-to-r from-red-300 to-red-900  px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Register
                </button>

                {/* <!-- Divider --> */}
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold text-black">
                    OR
                  </p>
                </div>

                {/* <!-- Social login buttons --> */}

                <a
                  className="mb-3 flex md:w-1/2 w-11/12 mx-auto items-center text-white justify-center rounded bg-gradient-to-r from-red-300 to-red-900   px-7 pb-2.5 pt-3 text-center text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  href="#!"
                  role="button"
                >
                  {/* <!-- Google --> */}
                  <FaGoogle></FaGoogle>
                  <span className="ml-3">
                    {" "}
                    <button onClick={handleGoogleSignIn}>
                      Continue with Google
                    </button>
                  </span>
                </a>
              </form>
              <p className="text-center mt-4 mb-10 text-xl text-black">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="underline font-bold text-red-600 mt-4 text-xl"
                >
                  LOGIN
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Register;