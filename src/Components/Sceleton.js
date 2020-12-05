/* eslint-disable react/no-array-index-key */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    marginBottom: 20,
    borderBottom: '2px solid rgba(0,0,0, 0.2)'
  },
  cardContent: {
    width: '100%',
    flexDirection: 'column',
    padding: 25
  },
  handle: {
    width: 60,
    height: 18,
    backgroundColor: theme.palette.primary.main,
    marginBottom: 7
  },
  date: {
    height: 14,
    width: 100,
    backgroundColor: 'rgba(0,0,0, 0.3)',
    marginBottom: 10
  },
  fullLine: {
    height: 15,
    width: '100%',
    backgroundColor: 'rgba(0,0,0, 0.2)',
    marginBottom: 10
  },
  halfLine: {
    height: 15,
    width: '50%',
    backgroundColor: 'rgba(0,0,0, 0.2)',
    marginBottom: 10
  }
}));

const Skeleton = ({ count }) => {
  const classes = useStyles();

  const content = Array.from({ length: count }).map((item, index) => (
    <div className={classes.card} key={index}>
      <div className={classes.cardContent}>
        <div className={classes.handle} />
        <div className={classes.halfLine} />
        <div className={classes.fullLine} />
        <div className={classes.fullLine} />
      </div>
    </div>
  ));

  return <Container>{content}</Container>;
};

Skeleton.propTypes = {
  count: PropTypes.number
};

Skeleton.defaultProps = {
  count: 10
};

export default Skeleton;
