import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url('/images/Rectangle 1.png')`,
          backgroundSize: "cover",
        }}
      >
        <div className="bg-black bg-opacity-70 min-h-screen w-full">
          <div className="container mx-auto">
            <Navbar from={0} />
            <div className="flex p-4 pt-20 flex-col justify-center gap-10 items-center text-white">
              <h1 className="text-5xl font-semibold text-center">Contact Us</h1>
              <p>
                Feel free to contact with us. We are waiting to hear from you.
              </p>
              <div className="flex flex-col gap-8 text-2xl font-semibold justify-center items-center">
                <h3>Email: hello@travelkoro.com</h3>
                <h3>Facebook: facebook.com/travelkoro</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {};

export default Contact;
