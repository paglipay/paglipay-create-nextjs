import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "../../../../store/store";
import {
  getLayoutState,
  setSections,
} from "../../../../store/slices/layoutSlice";

function FeatureForm() {
  const dispatch = useDispatch();
  const { sections } = useSelector(getLayoutState);

  const onClick = () =>{
    dispatch(setSections([
      {
        title: "Section Title",
        fluid: false,
        cols: ["4", "5", "3"],
        featureTypesArry: ["a", "5", "p"],
      }
    ]));
  }

  return (
    <div>
      <Button onClick={onClick}>FeatureForm</Button>
    </div>
  );
}

export default FeatureForm;
