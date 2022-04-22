import React, { useState } from "react";
import DLayout from "../components/DLayout";
import MyTable from "../components/MyTable";

function dlayout() {
  const features = [<MyTable />, <MyTable />, <MyTable />];
  const [cols, setCols] = useState(["3", "3", "3"]);

  return (
    <>
      <DLayout cols={cols} features={features} dname={"section1"} />
    </>
  );
}

export default dlayout;
