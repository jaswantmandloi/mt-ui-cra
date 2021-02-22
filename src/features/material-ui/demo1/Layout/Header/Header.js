import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import SearchIcon from "@material-ui/icons/Search";
import ExpandMore from "@material-ui/icons/ExpandMore";

import {
  useStylesContainer,
  useStylesLogo,
  useStylesMegaMenus,
  useStylesSearch,
  useStylesMenus,
} from "./HeaderStyles";
import { getBreakPointsWidths } from "features/material-ui/demo1/Utils";
import LoginPopover from "./LoginPopover";
import Help from "features/material-ui/demo1/Help/Help";
import CartPopover from "features/material-ui/demo1/Layout/Header/CartPopover";

export default function Header() {
  const containerClasses = useStylesContainer();
  const logoClasses = useStylesLogo();
  const megaMenuClasses = useStylesMegaMenus();
  const searchClasses = useStylesSearch();
  const menusClasses = useStylesMenus();
  return (
    <Container className={containerClasses.root} disableGutters>
      <Paper className={containerClasses.paper} square>
        <Grid container alignItems="center">
          <Grid item {...getBreakPointsWidths(2)} className={logoClasses.logo}>
            {/* <img src="/demo1/images/logo.svg" /> */}
            <img src="/demo1/images/white_logo.svg" />
          </Grid>
          <Grid item {...getBreakPointsWidths(4)}>
            <Grid container className={megaMenuClasses.container}>
              <Grid item>
                <Link href="#">
                  Products
                  <ExpandMore />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#">
                  Deals <ExpandMore />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#">
                  Services <ExpandMore />
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            {...getBreakPointsWidths(4)}
            className={searchClasses.container}
          >
            <Paper className={searchClasses.paper}>
              <Input
                fullWidth
                disableUnderline={true}
                type="search"
                placeholder="Search"
                inputProps={{ "aria-label": "description" }}
                endAdornment={
                  <InputAdornment position="end">
                    <SearchIcon className={searchClasses.searchIcon} />
                  </InputAdornment>
                }
              />
            </Paper>
          </Grid>

          <Grid
            item
            {...getBreakPointsWidths(2)}
            className={menusClasses.container}
            justify="flex-end"
          >
            <Box display="flex" justifyContent="space-around">
              <LoginPopover />
              <Help />
              <CartPopover />
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
