import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import {  Card } from 'react-bootstrap';
import PostHeader from "./PostHeader";
import './PostContainer.css';
import PostLikeSection from "./PostLikeSection";

function PostContainer(props) {
  return (
    <div className="PostContainer">
        <Card style={{ width: '40rem' , margin : 'auto', marginTop : '20px' }}>
        <Card.Header><PostHeader image={props.post.thumbnailUrl} username={props.post.username} /></Card.Header>
        <Card.Img variant="top" src={props.post.imageUrl} />
          <PostLikeSection />
             {props.post.comments.map( (comment) => {
                return <CommentSection key={comment.id} comment={comment}/>
              })}
      </Card>
    </div>
  );
}

export default PostContainer;
