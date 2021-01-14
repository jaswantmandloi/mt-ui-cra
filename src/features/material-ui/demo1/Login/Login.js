//import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import PersonOutline from "@material-ui/icons/PersonOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";

import { useStylesLogin } from "./LoginStyles";

//import { getBreakPointsWidths } from "features/material-ui/demo1/Utils";

export default function Login() {
  const loginClasses = useStylesLogin();

  return (
    <Box
      display="flex"
      className={loginClasses.main}
      flexDirection="column"
      px={2}
      py={2}
    >
      <Link href="#">Sing In</Link>
      <Link href="#">Create Account</Link>
      <Divider />
      <Link href="#" className={loginClasses.linkWithIcon}>
        <PersonOutline /> My Profile
      </Link>
      <Link href="#" className={loginClasses.linkWithIcon}>
        <CheckBoxOutlineBlankIcon /> My Orders
      </Link>
      <Link href="#" className={loginClasses.linkWithIcon}>
        <ChatBubbleOutlineIcon /> Account Overview
      </Link>
      <Divider />
      <Link href="#">Frequently Purchased</Link>
      <Link href="#">Lists</Link>
      <Link href="#">Auto Restok</Link>
      <Link href="#">Quick Order</Link>
      <Link href="#">Special Orders</Link>
    </Box>
  );
}
