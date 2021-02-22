import Popover from "@material-ui/core/Popover";
import Button from "@material-ui/core/Button";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import { useState } from "react";

import Cart from "features/material-ui/demo1/Cart/Cart";

const CartPopover = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorRefPosition, setAnchorRefPosition] = useState({
    current: { top: 70, left: 0, bottom: 70 },
  });

  const handleClick = (event) => {
    const element = event.currentTarget;
    const rects = element.getClientRects();
    setAnchorRefPosition({ current: rects[0] });
    setAnchorEl(element);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button aria-describedby={id} onClick={handleClick}>
        <ShoppingCart />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorReference="anchorPosition"
        //anchorEl={anchorEl}
        onClose={handleClose}
        anchorPosition={{
          top: anchorRefPosition.current.bottom,
          left: anchorRefPosition.current.left,
        }}
        // anchorOrigin={{
        //   vertical: "bottom",
        //   horizontal: "right",
        // }}
        // transformOrigin={{
        //   vertical: "bottom",
        //   horizontal: "right",
        // }}
      >
        <Cart />
      </Popover>
    </>
  );
};

export default CartPopover;
