import Box from "@material-ui/core/Box";

import { useStyles } from "./CartStyles";
import ProductList from "features/material-ui/demo1/Cart/ProductList/ProductList";

export default function ProductCard() {
  const classes = useStyles();

  return (
    <Box className={classes.cartContainer}>
      <ProductList />
    </Box>
  );
}
