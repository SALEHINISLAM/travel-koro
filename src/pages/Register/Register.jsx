import { useContext, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProviders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.css";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const errorToast = () => toast.error(error);
  const successToast = () => toast.success(success);

  const handleGoogleSignIn = (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirm-password");
    console.log("name", name);

    if (
      name.length == 0 ||
      email.length == 0 ||
      password.length == 0 ||
      confirmPassword.length == 0
    ) {
      setError("Please provide all the information");
      errorToast();
      return;
    }
    if (!email.match(validRegex)) {
      setError("Please provide valid email address");
      errorToast();
      return;
    }
    if (password != confirmPassword) {
      setError("password should be matched with confirm password");
      errorToast();
      return;
    }
    try {
      await createUser(email, password, name);
      setSuccess("Registration Successful");
      successToast();
      return;
    } catch (err) {
      setError(err.message);
      errorToast();
      return;
    }
  };
  return (
    <div id="house">
      <div className="bg-black bg-opacity-70">
        <div className="mx-auto container min-h-screen">
          <Navbar from={0} />
          <div className="flex flex-col gap-10 p-2 md:p-8 lg:p-16">
          <h1 className="text-center text-white font-extrabold text-5xl">
            Registration Now!
          </h1>
          <form
            className="card-body bg-[#c2c2c2] text-black"
            onSubmit={handleRegister}
          >
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-black">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered bg-white font-semibold text-black"
                name="name"
                //required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-white font-semibold"
                name="email"
                //required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered bg-white font-semibold"
                name="password"
                //required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="confirm password"
                className="input input-bordered bg-white font-semibold"
                name="confirm-password"
                //required
              />
            </div>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            ></ToastContainer>
            <div className="form-control mt-6">
              <button className="btn btn-warning">Register</button>
            </div>
            <div className="text-center font-semibold">
              <a href="/login" className="link link-hover">
                Already have an account? Login
              </a>
            </div>
          </form>
          <div className="divider text-white divider-warning outline-2">Or</div>
          <div className="flex justify-center">
          <button 
          onClick={handleGoogleSignIn}
          className="flex flex-row justify-center text-lg items-center font-semibold gap-8 bg-white rounded-full p-4 text-black px-8"
          >
            <FcGoogle className="size-7"/>
            Register With Google
            </button>
          </div>
          </div>
          </div>
      </div>
    </div>
  );
};


export default Register;
