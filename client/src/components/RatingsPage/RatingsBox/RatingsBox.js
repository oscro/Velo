import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// import Avatar from "@material-ui/core/Avatar";
// import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Star from "react-star-ratings";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={10} square>
        {/* <Grid container justify="center" alignItems="center">
      <Avatar alt="Remy Sharp" src="./P2.jpg" className={classes.bigAvatar} />
      </Grid> */}
        <Typography variant="h4" component="h3">
          {props.reviewTitle}
        </Typography>
        <Star
          rating={props.info}
          starDimension="20px"
          starSpacing="5px"
        />
        <Divider />
        <Typography component="p">{props.reviewContent}</Typography>
        <Typography variant="h6" component="h6">Review from: {props.from}</Typography>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);