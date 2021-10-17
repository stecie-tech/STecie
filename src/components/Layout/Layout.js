import React from "react";
import Content from "./Content";
import Header from "./Header";
import MasterSidebar from "./Sidebars/Master";

export default function Layout({ sidebar, children, active, setActive }) {
  return (
    <div className="flex">
      {sidebar === "master" ? (
        <MasterSidebar active={active} setActive={setActive} />
      ) : (
        <div></div>
      )}
      <div className="content w-4/5 flex flex-col">
        <Header />
        <Content>{children}</Content>
      </div>
    </div>
  );
}
