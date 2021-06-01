import React, { useState } from "react";
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
  const [comments] = useState(props.comments)
  const classes = useStyles();
  return (
    <div >
        {comments.map ( comment => {
         return <div key={comment.id} className={classes.root}>
        <h6>{comment.username}</h6>
        <p className={classes.txt}>{comment.text}</p>
        </div>
        })}
    </div>
  );
}

export default CommentSection;
