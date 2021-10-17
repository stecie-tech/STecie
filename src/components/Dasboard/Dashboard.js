import React from "react";
import Master from "./Master/Master";
import Teacher from "./Teacher/Teacher";
import Dos from "./Dos/Dos";

export default function Dashboard() {
  const [dash, setDash] = React.useState("master");
  return (
    <div>
      {dash === "master" ? (
        <Master setDash={setDash} />
      ) : dash === "teacher" ? (
        <Teacher />
      ) : dash === "dos" ? (
        <Dos />
      ) : (
        <div>Not found</div>
      )}
    </div>
  );
}
