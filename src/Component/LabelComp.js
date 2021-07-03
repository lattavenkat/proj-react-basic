import React from "react";
const LabelComp = ({ data, today }) => {
  console.log(data);
  console.log(today);
  return (
    <div>
      <h2 className="wavetext">
        <span>In Label Functional Component</span>
      </h2>
      <div>
        <h1 className="name">My Name is: {data}</h1>
        <h1 className="date">Today's Date: {today}</h1>
      </div>
    </div>
  );
};

export default LabelComp;
