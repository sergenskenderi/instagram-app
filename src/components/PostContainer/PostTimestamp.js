import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    marginLeft : '7px',
    fontSize : 'small' ,
    marginBottom : '10px'
  },
}));

function PostTimestamp({timestamp}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <p>{moment(timestamp,'hour').fromNow()}</p>
    </div>
  );
}
export default PostTimestamp;