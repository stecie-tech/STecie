import React from "react";
import team from "../../../assets/images/team2.svg";

export default function Workspace({ setIndex }) {
  return (
    <div className="flex flex-col space-y-7  w-full relative pb-10 md:ml-44 md:mr-10">
      <div className="input__container">
        <input
          type="text"
          placeholder="Choose a name for the workspace"
          className="py-1.5 text-xs px-3 w-3/5 border border-black rounded"
        />
      </div>
      <div className="wprofile flex md:ml-48 w-48 flex-col space-y-2">
        <img
          src={team}
          alt="wprofile"
          className="border border-transparent rounded-full w-28 h-28 p-1"
          style={{ backgroundColor: "#FFF3DF" }}
        />
        <div className="cursor-pointer font-semibold text-sm">
          Workspace profile
        </div>
      </div>
      <div
        className="text-white cursor-pointer bg-worange shadow py-1 px-3 text-center w-24 border border-transparent rounded absolute top-56 text-xs"
        style={{ right: "40%" }}
      >
        Submit
      </div>
      <div
        className="left-0 text-white cursor-pointer bg-dblue shadow py-1 px-3 text-center w-24 border border-transparent rounded absolute top-56 text-xs"
        onClick={() => setIndex(1)}
      >
        Previous
      </div>
    </div>
  );
}
