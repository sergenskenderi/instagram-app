import './App.css';
import React , {useState} from "react";
import dummyData from './dummy-data';
import PostContainer from "./components/PostContainer/PostContainer";
import PropTypes from "prop-types";
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  //useState that we save datas of dummyData
  const [posts , setPosts] = useState(dummyData);

  const commentPost = (postId,comment) => {
    const pst = posts.map( (post) => {
      if(post.id === postId){
        const username = "sergenskenderi";
        const id = post.comments[post.comments.length-1].id + 1;
        const newComment = {
          id : id ,
          username : username ,
          text : comment
        }
        post.comments.push(newComment);
      }
      return post;
    })

    setPosts(pst);
  }

  return (
    <div className="App">
      <SearchBar />
      {/* Call Post Container for each data from dummyData */}
      {posts.map( (post) => {
        return <PostContainer key={post.id} post={post} commentPost={commentPost}/>
      })}
    </div>
  );
}

App.propTypes = {
  post : PropTypes.arrayOf(
    PropTypes.shape({
      id : PropTypes.string,
      username : PropTypes.string,
      thumbnailUrl : PropTypes.string,
      imageUrl : PropTypes.string,
      likes : PropTypes.number,
      timestamp : PropTypes.string ,
      comments : PropTypes.arrayOf(
        PropTypes.shape({
          id : PropTypes.number,
          username : PropTypes.string,
          text : PropTypes.string
        })
      )
    })
  ),
  commentPost : PropTypes.shape({
    postId : PropTypes.string,
    comment : PropTypes.string
  })
}

export default App;
