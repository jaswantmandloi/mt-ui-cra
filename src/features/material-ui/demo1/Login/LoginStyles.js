import { makeStyles } from "@material-ui/core/styles";

export const useStylesLogin = makeStyles((theme) => ({
  main: {
    " & a": {
      padding: theme.spacing(0.5),
    },
    " & hr": {
      margin: `${theme.spacing(2)}px 0`,
    },
  },
  linkWithIcon: {
    display: "flex",
    alignItems: "center",
    "& svg": {
      marginRight: theme.spacing(0.5),
    },
  },
}));
