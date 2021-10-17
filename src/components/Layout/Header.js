import React from "react";
import notf from "../../assets/images/notf.svg";
import chat from "../../assets/images/chat.svg";

export default function Header() {
  return (
    <div className="w-full flex shadow-sm py-3 justify-center items-center">
      <div className="title font-bold mt-2.5 mr-14">Students</div>
      <div className="flex space-x-4 absolute right-10">
        <img src={notf} alt="notifications" className="w-5 h-5 mt-2.5" />
        <img src={chat} alt="messages" className="w-5 h-5 mt-2.5" />
        <div className="profile relative">
          <img
            src="https://i.pinimg.com/originals/73/16/f5/7316f550de9ca0045e3d8d98a5bb5e44.png"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
