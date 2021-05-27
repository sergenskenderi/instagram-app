import React from "react";
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
    }
  }));

function PostFooter() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Form.Control type="text" placeholder="Add a comment..."/>
        <BsThreeDots className={classes.icon}/>
        </div>
    )
}

export default PostFooter;