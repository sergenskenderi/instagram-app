import './CommentSection.css';
import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    marginLeft : '5px'
  },
  txt: {
    marginTop : 'auto',
    marginBottom : 'auto'
  }
}));

function CommentSection(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <h6>{props.comment.username}</h6>
        <p className={classes.txt}>{props.comment.text}</p>
    </div>
  );
}

export default CommentSection;
