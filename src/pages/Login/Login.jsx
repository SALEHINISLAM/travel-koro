import React, { useContext } from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar/Navbar";
import "../Home/Home.css";
import { AuthContext } from "../../Providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";
const Login = (props) => {
  const { signIn } = useContext(AuthContext);
  const location=useLocation();
  const navigate=useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    signIn(email, password)
      .then((res) => {
        console.log(res.user);
        navigate(location?.state? location.state: '/')
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-gray-700 min-h-screen" id="house">
      <div className="bg-black bg-opacity-70 h-full min-h-screen">
        <div className="container mx-auto">
          <Navbar from={0} />
          <form 
          className="card-body bg-[#f2f3f3]"
          onSubmit={handleLogin}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="">
            <label className="label">
                <a href="/register" className="label-text-alt link link-hover">
                  Do not have an account? Register
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
