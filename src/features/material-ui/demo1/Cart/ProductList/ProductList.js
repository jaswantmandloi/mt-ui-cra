/* eslint-disable no-debugger */
import ProductCard from "features/material-ui/demo1/ProductCard/ProductCard";
import Grid from "@material-ui/core/Grid";

import { useStyles } from "./ProductListStyles";

//import { getBreakPointsWidths } from "features/material-ui/demo1/Utils";

export default function ProductList() {
  const classes = useStyles();
  const products = Array.from(Array(10).keys());
  //debugger;
  return (
    <Grid container direction="row">
      {products.map((val, key) => {
        return (
          <Grid item key={key} className={classes.productItem}>
            <ProductCard />
          </Grid>
        );
      })}
    </Grid>
  );
}
