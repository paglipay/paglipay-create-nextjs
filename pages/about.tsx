import React from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "../store/store";
import { getLayoutState } from "../store/slices/layoutSlice";

function About() {
  const { jsonData, sections } = useSelector(getLayoutState);
  return (
    <>
      <Layout jsonData={jsonData} sections={sections} />
    </>
  );
}

export default About;
