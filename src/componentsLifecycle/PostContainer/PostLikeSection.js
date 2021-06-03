import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { BsHeart , BsChat } from "react-icons/bs";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
      marginLeft : '5px',
      "@media (max-width: 600px)": {
        marginLeft : '10px'
      }
    },
    likes : {
      float : 'left',
      marginLeft : '10px',
      "@media (max-width: 600px)": {
        marginLeft : '20px'
      }
    },
  }));

function PostLikeSection({likes , likePost , postId , liked}) {
    const classes = useStyles();

    const clickLike = () =>{
      likePost(postId);
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