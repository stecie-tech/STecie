import React from "react";
import Layout from "../../Layout/Layout";
import Courses from "../shared/Courses";
import Students from "../shared/Students";

export default function Master() {
  const [active, setActive] = React.useState("courses");
  return (
    <div>
      <Layout sidebar="master" active={active} setActive={setActive}>
        {active === "courses" ? (
          <Courses />
        ) : active === "students" ? (
          <Students />
        ) : (
          <div>Not done yet</div>
        )}
      </Layout>
    </div>
  );
}
