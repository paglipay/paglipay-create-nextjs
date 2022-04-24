import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "../../../../store/store";
import {
  getLayoutState,
  setSections,
} from "../../../../store/slices/layoutSlice";

function ColsForm() {
  const dispatch = useDispatch();
  const { sections } = useSelector(getLayoutState);

  const onClick = () => {
    dispatch(
      setSections([
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
          featureTypesArry: ["f", "h", "c", "i", "5", "p", "i", "5", "p"],
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
      ])
    );
  };

  return (
    <div>
      <Button onClick={onClick}>ColsForm</Button>
    </div>
  );
}

export default ColsForm;
