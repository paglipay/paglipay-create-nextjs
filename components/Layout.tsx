import React, { useState } from "react";
import ProductReview from "./ProductReview";

const Layout = () => {
  const components = {
    MyTable: require("./MyTable").default,
  };

  const [jsonData, setJsonData] = useState([
    {
      code: "0",
      componentType: "MyTable",
      props: {
        title: "zero",
      },
    },
  ]);

  const [dLayoutData, setDLayoutData] = useState([
    {
      title: "MyTable",
      fluid: true,
      cols: ["3", "3", "3", "3"],
      featureTypesArry: ["0", "0", "0", "0"],
    },
  ]);

  const [sections, setSections] = useState([
    {
      title: "Section Title",
      fluid: false,
      cols: ["3"],
      featureTypesArry: ["0"],
    },
  ]);

  const [showLayoutControls, setLayoutControls] = useState(true);

  return (
    <>
      {sections.map((e, i) => (
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
          <ProductReview
            key={`prl-${i}`}
            showLayoutControls={showLayoutControls}
            components={components}
            jsonData={jsonData}
            dLayoutData={dLayoutData}
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
