import { makeStyles } from "@material-ui/core/styles";

export const useStylesProductCard = makeStyles((theme) => ({
  main: {
    " & a": {
      padding: theme.spacing(0.5),
    },
    " & hr": {
      margin: `${theme.spacing(2)}px 0`,
    },
  },
  media: {
    height: "120px",
    width: "120px",
  },
  price: {
    fontWeight: theme.typography.fontWeightBold,
    color: theme.palette.common.black,
  },
  secondaryPrice: {
    textDecoration: "line-through",
    marginLeft: "5px",
  },
  offerPrice: {
    backgroundColor: theme.palette.background.main,
    padding: theme.spacing(0.5),
    color: theme.palette.common.white,
  },
  addToCartButton: {
    borderRadius: "80px",
  },
}));
