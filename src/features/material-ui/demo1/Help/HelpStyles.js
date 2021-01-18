import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => {
  const commonPadding = `${theme.spacing(1.5)}px ${theme.spacing(1.5)}px `;

  return {
    container: {
      "& hr": {
        margin: `${theme.spacing(1.5)}px ${theme.spacing(1)}px`,
      },
      "& p": {
        lineHeight: theme.typography.lineHeight2,
      },
    },
    heading: {
      fontWeight: theme.typography.fontWeightBold,
    },
    header: {
      backgroundColor: theme.palette.background.main,
      color: theme.palette.common.white,
      padding: commonPadding,
      "& button": {
        color: theme.palette.common.white,
      },
      position: "sticky",
      top: 0,
    },
    commonSpacing: {
      padding: commonPadding,
    },
    footer: {
      position: "sticky",
      bottom: 0,
      "& button": {
        borderRadius: "5rem",
        minWidth: "12rem",
        marginTop: theme.spacing(2),
      },
    },
  };
});
