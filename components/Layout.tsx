import React, { useState } from "react";
import LayoutRender from "./LayoutRender";

const Layout = () => {
  const components = {
    AggrigateRating: require("./AggrigateRating").default,
    ProductReviewCard: require("./ProductReviewCard").default,
    ProductPurchaseCard: require("./ProductPurchaseCard").default,
    ProductImages: require("./ProductImages").default,
    ReviewCrousel: require("./ReviewCrousel").default,
    ProductCrousel: require("./ProductCrousel").default,
    UserCard: require("./ui/components/Home/UserCard").default,
  };

  const [jsonData, setJsonData] = useState([
    {
      code: "h",
      componentType: "UserCard",
      props: {
        title: "UserCard",
      },
    },
    {
      code: "a",
      componentType: "AggrigateRating",
      props: {
        title: "AggrigateRating",
      },
    },
    {
      code: "5",
      componentType: "ProductReviewCard",
      props: {
        title: "I Love It! Five Stars",
        rating: 5,
      },
    },
    {
      code: "p",
      componentType: "ProductPurchaseCard",
      props: {
        title: "FREE devlivery",
      },
    },
    {
      code: "i",
      componentType: "ProductImages",
      // props: {
      //     title: "one"
      // },
    },
    {
      code: "l",
      componentType: "ReviewCrousel",
    },
    {
      code: "k",
      componentType: "ProductCrousel",
      props: {
        cols: [3, 3, 3, 3],
      },
    },
  ]);

  const [dLayoutData, setDLayoutData] = useState([
    {
      title: "MyTable",
      fluid: false,
      cols: ["3", "3", "3", "3"],
      featureTypesArry: ["i", "0", "0", "0"],
    },
  ]);

  const [sections, setSections] = useState([
    {
      title: "Section Title",
      fluid: true,
      cols: ["z", "3", "3", "3", "3", "3", "3", "3", "3"],
      featureTypesArry: ["l", "i", "i", "i", "i", "5", "5", "5", "5"],
    },
    {
      title: "Section Title",
      fluid: false,
      cols: ["4", "5", "3", "4", "5", "3", "4", "5", "3"],
      featureTypesArry: ["i", "h", "p", "i", "5", "p", "i", "5", "p"],
    },
    {
      title: "Section Title",
      fluid: false,
      cols: ["4", "5", "3"],
      featureTypesArry: ["i", "5", "p"],
    },
    {
      title: "Section Title",
      fluid: false,
      cols: ["4", "5", "3"],
      featureTypesArry: ["a", "5", "p"],
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
          <LayoutRender
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
