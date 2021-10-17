import React from "react";

export default function Content({ children }) {
  return (
    //boxes for now
    <div className="pt-20 px-20 w-full">
      {/* <div className="flex flex-row flex-wrap space-x-6">
        <div className="bg-worange flex justify-center items-center py-4 px-6 shadow rounded">
          P1
        </div>
        <div className="bg-worange flex justify-center items-center py-4 px-6 shadow rounded">
          P2
        </div>
        <div className="bg-worange flex justify-center items-center py-4 px-6 shadow rounded">
          P3
        </div>
      </div>
      <div className="flex flex-row flex-wrap space-x-6 mt-10">
        <div className="flex justify-center items-center py-4 px-6 shadow rounded">
          S1
        </div>
        <div className="flex justify-center items-center py-4 px-6 shadow rounded">
          S2
        </div>
        <div className="flex justify-center items-center py-4 px-6 shadow rounded">
          S3
        </div>
      </div> */}
      {children}
    </div>
  );
}
