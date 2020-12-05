import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, InputBase, Divider, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(3),
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: theme.spacing(1),
    marginRight: theme.spacing(2)
  },
  divider: {
    height: 28
  },
  icon: {
    opacity: 0.3
  }
}));

export default function SearchField({ handleSeachTrack }) {
  const classes = useStyles();

  const [search, setSearch] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    handleSeachTrack(search);
    setSearch('');
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Track"
        onChange={(e) => handleChange(e)}
        value={search}
      />
      <IconButton
        type="submit"
        className={classes.iconButton}
        onClick={(e) => handleClick(e)}
        disabled={!search}
      >
        <SearchIcon className={classes.icon} />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
    </Paper>
  );
}

SearchField.propTypes = {
  handleSeachTrack: PropTypes.func
};

SearchField.defaultProps = {
  handleSeachTrack: () => {}
};
