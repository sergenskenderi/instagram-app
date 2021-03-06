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

function PostLikeSection({likes}) {
    const classes = useStyles();
    return (
      <div>
        <div className={classes.root}>
           <BsHeart />
           <BsChat />
        </div>
        <h6 className={classes.likes}>{likes} Likes</h6>
      </div>
    )
}

export default PostLikeSection;