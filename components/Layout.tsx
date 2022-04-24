import React, { useState } from "react";
import LayoutRender from "./LayoutRender";
// import { useDispatch, useSelector } from "../store/store";
// import {
//   getLayoutState,
// } from "../store/slices/layoutSlice";

const Layout = (props:any) => {
  const components = {
    "AggrigateRating": require("./AggrigateRating").default,
    "ProductReviewCard": require("./ProductReviewCard").default,
    "ProductPurchaseCard": require("./ProductPurchaseCard").default,
    "ProductImages": require("./ProductImages").default,
    "ReviewCrousel": require("./ReviewCrousel").default,
    "ProductCrousel": require("./ProductCrousel").default,
    "UserCard": require("./ui/components/Home/UserCard").default,
    "FeatureForm": require("./ui/components/Layout/FeatureForm").default,
    "ColsForm": require("./ui/components/Layout/ColsForm").default,
    "Forms": require("./ui/components/Layout/Forms").default,
    "Layout": require("./Layout").default,
  };

  // const { jsonData, sections } = useSelector(getLayoutState);
  const { jsonData, sections } = props;

  return (
    <>
      {sections.map((e:any, i:any) => (
        <div key={`div-${i}`}>
          <section
            key={`prl-sec-${i}`}
            style={{
              backgroundColor: "whitesmoke",
              padding: "25px",
              marginBottom: "25px",
            }}
          >
            <h1 key={`prl-sec-h1-${i}`}>{e.title}</h1>
          </section>
          <LayoutRender
            key={`prl-${i}`}
            components={components}
            jsonData={jsonData}
            cols={e.cols}
            featureTypesArry={e.featureTypesArry}
            fluid={e.fluid}
          />
        </div>
      ))}
    </>
  );
};

export default Layout;
