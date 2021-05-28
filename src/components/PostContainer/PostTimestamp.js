import React from 'react';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(0.5),
    },
    marginLeft : '7px',
    fontSize : 'small' ,
    marginBottom : '10px'
  },
  time : {
    fontSize : 'small' ,
  }
}));

// Only for dummy-data solution
function getRelativeTime(timestamp) {
  var currYear = moment().year();
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var currMonth = moment().month();
  var currDay = moment().date();
  // get timestamp values
  var year = timestamp.split(" ")[2].split(",")[0];
  var day = timestamp.split(" ")[1].split("th")[0];
  var month = timestamp.split(" ")[0];

  var monthNr = 0;
  for(let i=0;i<=11;i++){
    if(monthNames[i] === month){
      monthNr = i+1;
    }
  }

  if(currYear-year <= 0){

    if(currMonth-monthNr <= 0){

      if(currDay-day <= 0){
        return currDay-day+" days ago";
      }else{
        return currDay-day+" days ago";
      }
    }else{
      return currMonth-monthNr+" months ago";
    }
  }else{
    return currYear-year+" years ago";
  }
}

function PostTimestamp({timestamp}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <p className="time">{getRelativeTime(timestamp)}</p>
    </div>
  );
}
export default PostTimestamp;