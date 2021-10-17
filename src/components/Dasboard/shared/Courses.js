import React from "react";

export default function Courses() {
  return (
    <div className="flex text-xs">
      <table class="border-collapse">
        <thead className="font-semibold" style={{ backgroundColor: "#FFC93C" }}>
          <tr className="">
            <th className="course__header border py-4 px-6">#</th>
            <th
              className="border border-dblue py-4 px-10"
              style={{ borderTop: "hidden" }}
            >
              Course name
            </th>
            <th
              className="border border-dblue py-4 px-10"
              style={{ borderTop: "hidden" }}
            >
              Instructors
            </th>
            <th
              className="border border-dblue py-4 px-10"
              style={{ borderTop: "hidden", borderRight: "linear-gradient()" }}
            >
              Classes
            </th>
          </tr>
        </thead>
        <tbody className="text-center text-xs">
          <tr>
            <td className="course__header py-4 px-10">1</td>
            <td className="border border-dblue py-4 px-10">Social studies</td>
            <td className="border border-dblue py-4 px-10">Torr Hulke</td>
            <td className="border border-dblue py-4 px-10">Senior 1</td>
          </tr>
          <tr>
            <td className="course__header py-4 px-10">2</td>
            <td className="border border-dblue py-4 px-10">Social studies</td>
            <td className="border border-dblue py-4 px-10">Torr Hulke</td>
            <td className="border border-dblue py-4 px-10">Senior 1</td>
          </tr>
          <tr>
            <td className="course__header py-4 px-10">3</td>
            <td className="border border-dblue py-4 px-10">Social studies</td>
            <td className="border border-dblue py-4 px-10">Torr Hulke</td>
            <td className="border border-dblue py-4 px-10">Senior 1</td>
          </tr>
          <tr>
            <td className="course__header py-4 px-10">4</td>
            <td className="border border-dblue py-4 px-10">Social studies</td>
            <td className="border border-dblue py-4 px-10">Torr Hulke</td>
            <td className="border border-dblue py-4 px-10">Senior 1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
