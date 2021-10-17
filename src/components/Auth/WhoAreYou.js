import React from "react";
import teacher from "../../assets/images/teacher.svg";
import dos from "../../assets/images/dos.svg";
import master from "../../assets/images/master.svg";
import { Link } from "react-router-dom";

export default function WhoAreYou() {
  return (
    <div className="md:w-1/2  h-4/5 shadow flex justify-center flex-col items-center m-auto mt-20 pt-10 pb-20  px-5">
      <div className="font-semibold text-2xl text-worange">Who are you?</div>
      <div className="flex flex-row flex-wrap w-full mt-5 space-x-12 space-y-10 justify-center items-center text-sm ">
        <Link to="/register">
          <div className="item flex justify-center flex-col items-center mt-10">
            <div className="border-4 rounded-full flex justify-center items-center p-6 bg-dblue">
              <img
                src={teacher}
                alt="teacher"
                className="w-16 h-16 cursor-pointer"
              />
            </div>
            <div className="font-semibold mt-2 mr-1 cursor-pointer">
              Teacher
            </div>
          </div>
        </Link>
        <Link to="/wizard">
          <div className="item flex justify-center items-center flex-col">
            <div className="border-4 rounded-full flex justify-center items-center p-6 bg-dblue">
              <img
                src={master}
                alt="master"
                className="w-16 h-16 cursor-pointer"
              />
            </div>
            <div className="font-semibold mt-2 cursor-pointer">Head master</div>
          </div>
        </Link>

        <Link to="/register">
          <div className="item flex justify-center items-center flex-col">
            <div className="border-4 rounded-full flex justify-center items-center p-6 bg-dblue">
              <img src={dos} alt="dos" className="w-16 h-16 cursor-pointer" />
            </div>
            <div className="font-semibold mt-2 cursor-pointer">
              Director of studies
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
