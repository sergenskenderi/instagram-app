import React , {useState} from "react";
import { Form } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
      marginLeft : '5px'
    },
    icon: {
        marginTop : 'auto' , 
        marginBottom : 'auto'
    },
    button : {
      display : 'none'
    }
  }));

function PostFooter(props) {
    const [comment , setComment] = useState("");
    const {postId,addNewComment} = props;
    const classes = useStyles();

    function handleCommentInputChange(e){
      setComment(e.target.value);
    }
  
    function handleSubmit(e){
      e.preventDefault();
      // check if comment is not empty
      if(comment.trim()){
        addNewComment(e,postId);
          //reset comment input
          setComment("");
      }
  }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className={classes.root}>
        <Form.Control 
            type="text" 
            placeholder="Add a comment..."
            onChange={handleCommentInputChange}
            value = {comment}
            />
        <BsThreeDots className={classes.icon}/>
        </div>
        <button type="submit" className={classes.button}/>
        </form>
        </div>
    )
}

export default PostFooter;