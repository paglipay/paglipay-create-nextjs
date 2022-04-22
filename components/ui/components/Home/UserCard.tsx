import React, { memo } from "react";
// import { Button, Typography } from "@mui/material";
import { Button } from "react-bootstrap";

import { useDispatch, useSelector } from "../../../../store/store";
import {
  getUserState,
  setEmail,
  setName,
} from "../../../../store/slices/userSlice";
import styles from "./Home.module.css";

/**
 * A simple User card that pulls user info from redux-toolkit and displays it.
 * @constructor
 */
function UserCard() {
  const dispatch = useDispatch();
  const { name, email } = useSelector(getUserState);

  const onClick = () => {
    console.log("onClick");
    dispatch(setName("setName"));
    setTimeout(() => {
      console.log("setNameBack");
      dispatch(setName("setNameBack"));
      // dispatch(setEmail('sulhadin@hotmail.com'));
    }, 2000);
  };

  console.log("user info", name, email);
  return (
    <>
      <h1>
        Hi <>{name}</>
      </h1>

      <p>
        <code>Something is wrong I can feel it!</code>
        <Button onClick={onClick}>Change it!</Button>
      </p>
    </>
  );
}

export default memo(UserCard);
