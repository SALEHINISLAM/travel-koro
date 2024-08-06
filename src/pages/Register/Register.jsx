import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProviders";

const Register = (props) => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess]=useState('')
  const handleRegister = (e) => {
    setError("");
    setSuccess('');
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirm-password");
    if (
      name.length === 0 ||
      email.length === 0 ||
      password.length === 0 ||
      confirmPassword.length === 0
    ) {
      setError("Please provide all the information");
      return;
    }
    if (!email.match(validRegex)) {
      setError("Please provide valid email address");
      return;
    }
    if (password != confirmPassword) {
      setError("password should be matched with confirm password");
      return;
    }
    createUser(email,password).then(res=>{
        setSuccess('success');
        console.log(res.user); 
    }).catch(err=>setError(err.message))
  };
  return (
    <div id="house">
      <div className="bg-black bg-opacity-70">
        <div className="mx-auto container min-h-screen">
          <Navbar from={0} />
          <form className="card-body bg-[#c2c2c2]">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control ">
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered"
                name="confirm-password"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" id="register-btn">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Register.propTypes = {};

export default Register;
