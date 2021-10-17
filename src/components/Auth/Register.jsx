import React, { Component } from "react";
import "../../assets/style.css";
import forward from "../../assets/images/forward.png";
import logo from "../../assets/images/temp_logo.png";
import { Link } from "react-router-dom";

class Register extends Component {
  render() {
    return (
      <div className=" overflow-hidden  h-full md:flex lg:w-3/4 shadow-md mt-14 main  ">
        <div className="  h-full w-full md:w-1/2  bg-white-100 ">
          <div className=" -mt-20  ml-32 absolute flex  lg:mt-2  lg:-ml-0">
            <img src={logo} alt="eazelogo" className="mt-2 ml-2 " />
            <p className="mt-6 font-bold text-xl">EAZ</p>
          </div>

          <div className="flex float-right mr-52">
            <div className="invisible md:visible absolute flex space-x-8 mt-7 ">
              <Link to="/">
                <li className="font-semibold text-md text-black list-none  hover:text-yellow-500  ">
                  Register{" "}
                </li>
              </Link>
              <Link to="/login">
                <li className="font-semibold text-md list-none  text-black hover:text-yellow-500   ">
                  {" "}
                  Login
                </li>
              </Link>
            </div>
          </div>

          <div className=" mt-12 space-y-6  md:mt-28 ml-14 space-y-5">
            <input
              className="w-full -ml-6 lg:ml-1  md:w-4/5 h-10  px-3 mb-2 text-base text-gray-700 border-black  placeholder-gray-600 border rounded focus:outline-none   "
              type="text"
              placeholder="Firstname"
            />
            <input
              className="w-full  -ml-6 lg:ml-1 md:w-4/5 h-10  px-3 mb-2 text-base text-gray-700 border-black  placeholder-gray-600 border rounded focus:outline-none   "
              type="text"
              placeholder="Lastname"
            />
            <input
              className="w-full -ml-6 lg:ml-1 md:w-4/5 h-10  px-3 mb-2 text-base text-gray-700 border-black  placeholder-gray-600 border rounded focus:outline-none   "
              type="email"
              placeholder="Email"
            />
            <input
              className="w-full -ml-6  lg:ml-1 md:w-4/5  h-10  px-3 mb-2 text-base text-gray-700 border-black  placeholder-gray-600 border rounded focus:outline-none   "
              type="text"
              placeholder="SchoolCode"
            />
            <input
              className="w-full  -ml-6  lg:ml-1  md:w-4/5  h-10  px-3 mb-2 text-base text-gray-700 border-black  placeholder-gray-600 border rounded focus:outline-none   "
              type="password"
              placeholder="Password"
            />
          </div>
          <button
            className="shadow   outline  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-8 ml-14"
            type="button"
          >
            Sign Up
          </button>

          <div className="visible mt-4 lg:invisible">
            <Link to="/login" className="text-center ">
              <p>Already have an account?Login</p>
            </Link>
          </div>
        </div>

        <div className="invisible md:visible h-full w-1/2 color ">
          <div className=" text-center text-white mt-12">
            <p className=" font-bold text-2xl">Welcome ! </p>
            <p className="text-lg">Your team's success is close.</p>
          </div>

          <img src={forward} alt="foward" className=" mt-20 -ml-20" />
        </div>
      </div>
    );
  }
}

export default Register;
