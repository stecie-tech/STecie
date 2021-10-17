import React from "react";

export default function School({ setIndex }) {
  return (
    <div>
      <div className="flex flex-col space-y-4  w-full relative pb-10 md:ml-44 md:mr-10">
        <div className="input__container">
          <input
            type="text"
            placeholder="School name"
            className="py-1.5 text-xs px-3 w-3/5 border border-black rounded"
          />
        </div>
        <div className="input__container">
          <input
            type="text"
            placeholder="Province"
            className="py-1.5 text-xs px-3 w-3/5 border border-black rounded"
          />
        </div>
        <div className="input__container">
          <input
            type="text"
            placeholder="District"
            className="py-1.5 text-xs px-3 w-3/5 border border-black rounded"
          />
        </div>
        <div className="input__container">
          <input
            type="text"
            placeholder="Sector"
            className="py-1.5 text-xs px-3 w-3/5 border border-black rounded"
          />
        </div>
        <div
          className="text-white cursor-pointer bg-worange shadow py-1 px-3 text-center w-24 border border-transparent rounded absolute top-48 text-xs"
          style={{ right: "40%" }}
          onClick={() => setIndex(2)}
        >
          Next
        </div>
        <div
          className="left-0 text-white cursor-pointer bg-dblue shadow py-1 px-3 text-center w-24 border border-transparent rounded absolute top-48 text-xs"
          onClick={() => setIndex(0)}
        >
          Previous
        </div>
      </div>
    </div>
  );
}
