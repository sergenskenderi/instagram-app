import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { FaTrashAlt } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    marginLeft : '5px' ,
    "@media (max-width: 600px)": {
      marginLeft : '17px'
    }
  },
  txt: {
    marginTop : 'auto',
    marginBottom : 'auto'
  }
}));

function CommentSection(props) {
  const [comments] = useState(props.comments)
  const classes = useStyles();

  const deleteComment = (commentId) =>{
    props.removeComment(commentId , props.postId);
  };
  return (
    <div >
        {comments.map ( comment => {
         return <div key={comment.id} className={classes.root}>
        <h6>{comment.username}</h6>
        <p className={classes.txt}>{comment.text}</p>
        <FaTrashAlt  onClick={() => deleteComment(comment.id)} style={ { color : 'grey' , marginTop : 'auto' , display : comment.username === "sergenskenderi" ? "" : "none"}}/>
        </div>
        })}
    </div>
  );
}

export default CommentSection;
