import React from "react";

export default function Account({ setIndex }) {
  return (
    <div className="flex md:flex-row flex-col flex-wrap md:pr-10 md:pl-32 w-full ">
      <div className="flex flex-col space-y-2 w-2/5 mt-2 relative m-auto">
        <img
          src="https://source.unsplash.com/random"
          alt="profile"
          className="border rounded-full h-32 w-32 border-transparent"
        />
        <div className="cursor-pointer font-semibold ml-3 text-sm">
          Choose picture
        </div>
      </div>
      <div className="flex flex-col space-y-4  md:w-3/5 w-full relative pb-10 pl-20 md:pl-0 mt-10 md:mt-0">
        <div className="input__container">
          <input
            type="text"
            placeholder="First name"
            className="py-1.5 text-xs px-3 w-9/12 border border-black rounded"
          />
        </div>
        <div className="input__container">
          <input
            type="text"
            placeholder="Last name"
            className="py-1.5 text-xs px-3 w-9/12 border border-black rounded"
          />
        </div>
        <div className="input__container">
          <input
            type="text"
            placeholder="Email"
            className="py-1.5 text-xs px-3 w-9/12 border border-black rounded"
          />
        </div>
        <div className="input__container">
          <input
            type="text"
            placeholder="Password"
            className="py-1.5 text-xs px-3 w-9/12 border border-black rounded"
          />
        </div>
        <div
          className="next_btn text-white cursor-pointer bg-worange shadow py-1 px-3 text-center w-24 border border-transparent rounded absolute top-48 text-xs"
          onClick={() => setIndex(1)}
        >
          Next
        </div>
      </div>
    </div>
  );
}
