import React, { useState } from "react";
import Sliders from "../component/Slider";
import Sec from "../../assets/images/Sec (1).png";
import { registerAPI } from "../../Apis/Api";
import { toast } from "react-toastify";
import {Link} from "react-router-dom";
const Register = () => {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const changeFirstName = (e) => {
    setFname(e.target.value);
  };

  const changeLastName = (e) => {
    setLname(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePhoneNumber = (e) => {
    setPhoneNumber(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password, phoneNumber, fName, lName);

    const data = {
      fName: fName,
      lName: lName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    };

    registerAPI(data)
      .then((res) => {
        if (!res.data.success) {
          toast.error(res.data.message);
        } else {
          toast.success(res.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error("Server Error");
      });
  };
  return (
    <div className="bg-gray-100">
      <div className="login-page container mx-auto  h-100">
        <div className="w-full  grid grid-cols-1  xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-1  ">
          <div className="left-container  col-span-2 xl:block md:block sm:hidden hidden">
            <img
              src={Sec}
              alt="background image "
              className="p-2 rounded-md pt-3"
            />
          </div>
          <div className="right-container p-3  ">
            <div className="change-image">
              <Sliders />
            </div>
            <h1 className="text-grey-500 lg:text-[24px] sm:text[18px] mb-4 font-large pt-2">
              Register
            </h1>

            <input
              onChange={changeFirstName}
              placeholder="enter you first name"
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-5 mb-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" required
            />
            <input
              onChange={changeLastName}
              placeholder="enter you last name"
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-5 mb-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" required
            />
            <input
              onChange={changeEmail}
              placeholder="enter you email"
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-5 mb-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
            />
            <input
              onChange={changePhoneNumber}
              placeholder="enter you phonenumber"
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-5 mb-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
            />
            <input
              onChange={changePassword}
              placeholder="enter you password"
              type="text"
              className="block w-full rounded-md border-0 py-1.5 pl-5 pr-5 mb-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
            />
            <button
              onClick={handleSubmit}
              className="bg-gray-900 w-full rounded-md border-0 py-1.5 pl-5 pr-5 mb-2  hover:bg-gray-700 text-white "
            >
              Register
            </button>

            <h2 className="pt-4">
              Already have an account?{" "}
              <Link to="/" className="text-sky-500 hover:text-sky-400">Sign in</Link>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
