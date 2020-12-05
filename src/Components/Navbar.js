import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// MUI stuff
import {
  useScrollTrigger,
  AppBar,
  Grid,
  Toolbar,
  Button,
  Container
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { makeStyles } from '@material-ui/core/styles';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,

  window: PropTypes.func
};

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: 60,
    marginBottom: theme.spacing(2),
    padding: 0
  },
  right: {
    textAlign: 'right'
  }
}));

const Navbar = (props) => {
  const classes = useStyles();
  return (
    <ElevationScroll {...props} className={classes.root}>
      <AppBar position="sticky">
        <Container>
          <Toolbar>
            <Grid container>
              <Grid item xs={8}>
                <Button color="inherit" component={Link} to="/">
                  Home
                </Button>
              </Grid>
              <Grid item xs={4} className={classes.right}>
                <Button color="inherit" component={Link} to="/searchtrack">
                  <SearchIcon />
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </ElevationScroll>
  );
};

export default Navbar;
