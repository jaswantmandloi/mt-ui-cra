import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";

import Login from "features/material-ui/demo1/Login/Login";

const LoginPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button aria-describedby={id} onClick={handleClick}>
        <Typography variant="subtitle2">Sign In</Typography>
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "bottom",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "bottom",
        }}
      >
        <Login />
      </Popover>
    </>
  );
};

export default LoginPopover;
