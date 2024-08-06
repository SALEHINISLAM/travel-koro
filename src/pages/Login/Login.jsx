import React, { useContext } from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar/Navbar";
import "../Home/Home.css";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from=location.state?.from?.pathname || "/";
  const handleLogin = async(e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    // signIn(email, password)
    //   .then((res) => {
    //     console.log(res.user);
    //     navigate(location.state?.from?.pathname || "/" ,{replace: true});
    //   })
    //   .catch((error) => console.log(error));
    try{
      const res=await signIn(email, password);
      console.log(res.user);
      navigate(from,{replace:true})
    }
    catch(err){
      console.log(err);
    }
  };
  const handleGoogleSignIn = async(e) => {
    e.preventDefault();
    try{
      const res=await signInWithGoogle();
      console.log(res.user);
      navigate(from,{replace:true});
    }
    catch(err){
      console.log(err);
      
    }
  };
  return (
    <div className="bg-gray-700 min-h-screen" id="house">
      <div className="bg-black bg-opacity-70 h-full min-h-screen">
        <div className="container mx-auto">
          <Navbar from={0} />
          <div className="flex flex-col justify-center items-center p-2 md:p-8 lg:p-16 gap-10">
          <h1 className="text-center text-white font-extrabold text-6xl">
            Login Now!
          </h1>
          <form className="card-body bg-[#c2c2c2] w-full" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-white font-semibold text-black"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-white font-semibold text-black"
                name="password"
                required
              />
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-warning">Login</button>
            </div>
            <div className="flex justify-center">
              <label className="text-black font-semibold text-center">
                <a href="/register" className="link link-hover text-center">
                  Do not have an account? Register
                </a>
              </label>
            </div>
          </form>
          <div className="divider divider-warning text-white">Or</div>
          <div className="flex justify-center">
          <button className="p-4 px-8 bg-white text-black font-semibold text-lg rounded-full flex flex-row gap-8 justify-center items-center"
          onClick={handleGoogleSignIn}
          >
            <FcGoogle className="size-7"/>
          Login With Google
          </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
