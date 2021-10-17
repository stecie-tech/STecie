import React, { useEffect, useState } from "react";
import Account from "./Account";
import School from "./School";
import Workspace from "./Workspace";

export default function Wizard() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    console.log(window.screen.width);
    if (index === 0) {
      // if (window.screen.width < 768) {
      //   //Mobile
      //   document.getElementById("progress_acc").classList.add("bg-worange");
      // }
      // else {
      let prog = document.getElementById("progress_acc");
      let details = document.getElementById("progress_det");
      let wspace = document.getElementById("progress_wsp");

      prog.classList.add("active__nav");
      details.classList.remove("active__nav__nd", "active_aftr");
      wspace.classList.remove("active__nav__nd");
    }
    if (index === 1) {
      let prog = document.getElementById("progress_det");
      let account = document.getElementById("progress_acc");
      let wspace = document.getElementById("progress_wsp");

      prog.classList.add("active__nav__nd", "active_aftr");
      wspace.classList.remove("active__nav__nd");
      account.classList.remove("active__nav");
    }
    if (index === 2) {
      let prog = document.getElementById("progress_wsp");
      let details = document.getElementById("progress_det");
      let account = document.getElementById("progress_acc");

      prog.classList.add("active__nav__nd");
      details.classList.remove("active__nav__nd", "active_aftr");
      account.classList.remove("active__nav");
    }
  }, [index]);
  return (
    <div className="Wizard md:w-4/6 h-4/5 shadow flex  flex-col  m-auto mt-16 pt-10 pb-20 mb-20">
      <div className="font-semibold text-base text-worange text-center">
        Join Rhinestone
      </div>
      <div
        className="nav bg-dblue flex justify-content items-center w-full text-white text-xs my-5 md:h-11 h-10 md:text-xs"
        id="progress"
      >
        <div
          id="progress_acc"
          className="md:pl-20 pl-10 h-full py-3 md:w-5/12 w-2/6 overflow-hidden cursor-pointer md:text-center"
          onClick={() => setIndex(0)}
        >
          Account
        </div>
        <div
          id="progress_det"
          className="nav-item md:pl-8 pl-3 md:py-3.5 py-3 md:w-5/12 w-2/6 overflow-hidden cursor-pointer md:mr-0 text-center"
          onClick={() => setIndex(1)}
        >
          School details
        </div>
        <div
          id="progress_wsp"
          className="nav-item md:pl-10 md:py-3.5 py-3 md:w-5/12 w-2/6 overflow-hidden cursor-pointer text-center"
          onClick={() => setIndex(2)}
        >
          Create Workspace
        </div>
      </div>
      <div className="mt-8">
        {index === 0 ? (
          <Account setIndex={setIndex} />
        ) : index === 1 ? (
          <School setIndex={setIndex} />
        ) : (
          <Workspace setIndex={setIndex} />
        )}
      </div>
    </div>
  );
}

// w-4/12
// w-4/12
// w-4/12
