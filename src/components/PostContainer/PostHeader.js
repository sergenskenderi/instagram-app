import { Avatar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function PostHeader({image, username}){
    const classes = useStyles();
    return (
        <div className={classes.root}>
              <Avatar alt="Profile Image" src={image}/>
              <h6 className="username" style={{marginTop : 'auto' , marginBottom : 'auto'}}>{username}</h6>
        </div>
    )
}

export default PostHeader;