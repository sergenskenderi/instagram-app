import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import { Card } from 'react-bootstrap';
import PostHeader from "./PostHeader";
import PostLikeSection from "./PostLikeSection";
import PostTimestamp from "./PostTimestamp";
import PostFooter from "./PostFooter";
import PropTypes from "prop-types";

function PostContainer(props) {
  return (
    <div className="PostContainer">
        <Card style={{ width: '40rem' , margin : 'auto', marginTop : '1%' , marginBottom : '1%' , padding : '0' }}>
        <Card.Header><PostHeader image={props.post.thumbnailUrl} username={props.post.username} /></Card.Header>
        <Card.Img variant="top" src={props.post.imageUrl} />
        <PostLikeSection likes={props.post.likes} likePost={props.likePost} postId={props.post.id} liked={props.post.liked}/>
         <CommentSection comments={props.post.comments} removeComment={props.removeComment} postId={props.post.id}/>
        <PostTimestamp timestamp={props.post.timestamp} />
        <Card.Footer>
          <PostFooter postId={props.post.id} addNewComment={props.addNewComment} />
        </Card.Footer>
      </Card>
    </div>
  );
}

PostContainer.propTypes = {
  image : PropTypes.string ,
  username : PropTypes.string,
  src : PropTypes.string,
  likes : PropTypes.number,
  comment : PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.number,
      text : PropTypes.string,
      username : PropTypes.string
    }),
  ),
  timestamp : PropTypes.string,
  postId : PropTypes.number ,
}

export default PostContainer;
