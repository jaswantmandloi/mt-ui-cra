import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import CloseIcon from "@material-ui/icons/Close";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import HelpOutline from "@material-ui/icons/HelpOutline";

import { useStyles } from "./HelpStyles";
import { useState } from "react";

export default function Help() {
  const classes = useStyles();
  const [isOpenHelp, setIsOpenHelp] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setIsOpenHelp(!isOpenHelp);
        }}
      >
        <HelpOutline />
      </Button>
      <Drawer anchor="right" open={isOpenHelp} onClose={() => {}}>
        <Box width={500} className={classes.container}>
          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.header}
          >
            <Typography variant="h6">Help</Typography>
            <Button
              align="right"
              onClick={() => {
                setIsOpenHelp(false);
              }}
            >
              <CloseIcon />
            </Button>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            className={classes.commonSpacing}
          >
            <Typography variant="body1" className={classes.heading}>
              Popular Topics
            </Typography>
            <Link href="#">Go to the Help Center</Link>
          </Box>
          <Divider />
          <Box className={classes.commonSpacing}>
            <Typography variant="subtitle1" className={classes.heading}>
              Reset my password
            </Typography>
            <Box pt={1}>
              <Typography variant="body1" paragraph>
                Click <Link href="#">here</Link> to reset your password. On that
                page, enter your email address and click Submit. Staples will
                email you a secure link to reset your password. Follow the
                instructions in the email.
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box className={classes.commonSpacing}>
            <Typography variant="body1" className={classes.heading}>
              Track an order
            </Typography>
            <Box pt={1}>
              <Typography variant="body1" paragraph>
                You can track your orders online with your{" "}
                <Link href="#">order number and delivery zip code</Link>, or by
                signing into your Staples account. Once you are signed in, visit
                the My Orders page by clicking on Account My Orders. You will
                find all your open orders here. Click on the order number for
                the order you would like to track.
              </Typography>
            </Box>
            <Box pt={1}>
              <Link href="#" variant="body1">
                More information about tracking orders
              </Link>
            </Box>
          </Box>
          <Divider />
          <Box className={classes.commonSpacing}>
            <Typography variant="body1" className={classes.heading}>
              Return an item
            </Typography>
            <Box pt={1}>
              <Typography variant="body1" paragraph>
                If you ordered your item(s) online or by catalog, you can bring
                your item(s) to any Staples® retail store along with your
                receipt or packing slip. In-store purchases must be returned
                in-store. We also offer convenient online returns for items
                purchased online or by phone. Once you are signed in, visit the
                My Orders page by clicking on Account My Orders. Click on the
                Return link to the left of each order number then select the
                item(s) you would like to return.
              </Typography>
            </Box>
            <Box pt={2}>
              <Link href="#" variant="body1">
                More information about returning an item
              </Link>
            </Box>
            <Box pt={2}>
              <Link href="#" variant="body1">
                View return and exchange policies
              </Link>
            </Box>
          </Box>
          <Box className={`${classes.footer} `}>
            <Paper square className={` ${classes.commonSpacing}`} elevation={4}>
              <Box display="flex" justifyContent="space-between">
                <Typography variant="h6">Call an expert:</Typography>
                <Typography variant="h6">
                  <Link href="#">(800) 333-3330</Link>
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between">
                <Button size="large" variant="outlined">
                  Chat
                </Button>
                <Button size="large" variant="outlined">
                  Feedback
                </Button>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
