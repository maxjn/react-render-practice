import ChildOpt from "@/components/Optimization/ChildOpt";
import ParentOpt from "@/components/Optimization/ParentOpt";
import React from "react";

//pervent unnecessary rerender by passing the component as a child

const page = () => {
  return (
    <ParentOpt>
      {" "}
      <ChildOpt />{" "}
    </ParentOpt>
  );
};

export default page;
