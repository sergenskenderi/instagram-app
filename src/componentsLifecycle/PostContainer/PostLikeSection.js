import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { BsHeart , BsChat } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
      marginLeft : '5px'
    },
    likes : {
      float : 'left',
      marginLeft : '10px'
    },
  }));

function PostLikeSection({likes , likePost , postId , liked}) {
    const classes = useStyles();

    const clickLike = (event) =>{
      likePost(event,postId);
    };

    return (
      <div>
        <div className={classes.root}>
           <BsHeart onClick={clickLike} style={{color: liked === true ? "red" : ""}}/>
           <BsChat />
        </div>
        <h6 className={classes.likes}>{likes} Likes</h6>
      </div>
    )
}

export default PostLikeSection;