import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CardHeader from "@material-ui/core/CardHeader";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

import { useStylesProductCard } from "./ProductCardStyles";

//import { getBreakPointsWidths } from "features/material-ui/demo1/Utils";

export default function ProductCard() {
  const classes = useStylesProductCard();

  return (
    <Card>
      <CardHeader
        avatar={
          <Typography
            variant="body2"
            component="div"
            className={classes.offerPrice}
          >
            45% off
          </Typography>
        }
        action={
          <IconButton aria-label="settings">
            <CloseIcon />
          </IconButton>
        }
      />
      <CardMedia
        className={classes.media}
        image="/demo1/images/sp72203987_sc7.webp"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>

        <Box display="flex">
          <Typography variant="body2" className={classes.price} component="div">
            $34.00
          </Typography>
          <Typography
            variant="body2"
            className={classes.secondaryPrice}
            color="textSecondary"
            component="div"
          >
            $34.00
          </Typography>
        </Box>
      </CardContent>
      <CardActions disableSpacing>
        <Button variant="outlined" className={classes.addToCartButton}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
