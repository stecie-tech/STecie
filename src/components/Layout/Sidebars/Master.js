import React from "react";
import logo from "../../../assets/images/logo.svg";
import course from "../../../assets/images/course.svg";
import teachers from "../../../assets/images/teachers.svg";
import people from "../../../assets/images/people.svg";
import invite from "../../../assets/images/invite.svg";
import schedule from "../../../assets/images/schedule.svg";
import school from "../../../assets/images/school.svg";
import todo from "../../../assets/images/todo.svg";

export default function Master({ active, setActive }) {
  return (
    <div className="bg-dblue w-1/5 h-screen text-white flex flex-col items-center">
      <div className="flex pr-5 pt-10">
        <img src={logo} alt="logo" className="w-5 h-5 mt-1" />
        <div className="font-bold ml-1.5">Eaz</div>
      </div>
      <div className="flex flex-col mt-12 text-xs pt-6 w-full">
        <div
          className={`flex pr-5 w-full flex justify-center items-center py-5 space-x-5 cursor-pointer ${
            active === "students" ? "active__side" : ""
          }`}
          onClick={() => setActive("students")}
        >
          <img src={people} alt="students" className="w-4 h-4" />
          <div className="ml-1.5">Students</div>
        </div>
        <div
          className={`flex pr-5 w-full flex justify-center items-center py-5 space-x-5 cursor-pointer ${
            active === "courses" ? "active__side" : ""
          }`}
          onClick={() => setActive("courses")}
        >
          <img src={course} alt="courses" className="w-4 h-4  mr-1 -ml-1" />
          <div className="ml-1.5">Courses</div>
        </div>
        <div
          className={`flex pr-5 w-full flex justify-center items-center py-5 space-x-5 cursor-pointer ${
            active === "teachers" ? "active__side" : ""
          }`}
          onClick={() => setActive("teachers")}
        >
          <img src={teachers} alt="teachers" className="w-4 h-4 -ml-0.5" />
          <div className="ml-1.5">Teachers</div>
        </div>
        <div
          className={`flex pr-8 w-full flex justify-center items-center py-5 space-x-5 cursor-pointer ${
            active === "school" ? "active__side" : ""
          }`}
          onClick={() => setActive("school")}
        >
          <img src={school} alt="school" className="w-4 h-4 " />
          <div className="">School</div>
        </div>
        <div
          className={`flex pr-5 w-full flex justify-center items-center py-5 space-x-5 cursor-pointer ${
            active === "schedules" ? "active__side" : ""
          }`}
          onClick={() => setActive("schedules")}
        >
          <img src={schedule} alt="schedules" className="w-4 h-4 ml-1" />
          <div className="ml-1.5">Schedules</div>
        </div>
        <div
          className={`flex pr-10 w-full flex justify-center items-center py-5 space-x-6 cursor-pointer ${
            active === "todo" ? "active__side" : ""
          }`}
          onClick={() => setActive("todo")}
        >
          <img src={todo} alt="todo" className="w-3 h-3 " />
          <div className="ml-1.5">Todo</div>
        </div>
        <div
          className={`flex pr-10 w-full flex justify-center items-center py-5 space-x-5 cursor-pointer ${
            active === "invite" ? "active__side" : ""
          }`}
          onClick={() => setActive("invite")}
        >
          <img src={invite} alt="invite" className="w-4 h-4 " />
          <div className="ml-1.5">Invite</div>
        </div>
      </div>
    </div>
  );
}
