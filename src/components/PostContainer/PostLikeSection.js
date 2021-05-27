import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { FaRegComment } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function PostLikeSection() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
           <FaRegComment />
        </div>
    )
}

export default PostLikeSection;