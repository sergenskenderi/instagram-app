import './App.css';
import React , {useState} from "react";
import dummyData from './dummy-data';
import PostContainer from "./components/PostContainer/PostContainer";
import PropTypes from "prop-types";
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  //useState that we save datas of dummyData
  const [posts] = useState(dummyData);
  return (
    <div className="App">
      <SearchBar />
      {/* Call Post Container for each data from dummyData */}
      {posts.map( (post) => {
        return <PostContainer key={post.id} post={post}/>
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
  )
}

export default App;
