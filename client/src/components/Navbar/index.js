import React from "react";
import Link from '@material-ui/core/Link';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SideNav from "../SideNav";


const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function Navbar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <SideNav />
          <Typography variant="h6" color="inherit" className={classes.grow}>
          <Link href ="/"
          variant="h6"
          underline="none"
          color="inherit">
            AdConnect
          </Link>
          </Typography>
          <Button color="inherit">View Ad Space</Button>
          <Button color="inherit">View Company Listings</Button>
          <Button color="inherit" href="/signin">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);