import React from "react";
import PostContainer from "./componentsLifecycle/PostContainer/PostContainer";
import SearchBar from "./componentsLifecycle/SearchBar/SearchBar";
import dummyData from "./dummy-data";

class AppLifecycle extends React.Component{
    state = {
        posts : []
    }

    constructor(){
        super();
        this.addNewComment = this.addNewComment.bind(this);
        this.likePost = this.likePost.bind(this);
        this.searchPost = this.searchPost.bind(this);
    }

    componentDidMount() {
        this.setState({
            posts : dummyData
        })
    }

    searchPost(event){
       const pst =  this.state.posts.map( (post) => {
            if(event.target[0].value === post.username){
                return post;
            }
        });

        this.setState({
            posts : pst
        })
        
    }

    addNewComment(event,postId) { 
        const pst = this.state.posts.map( (post) => {
            if(post.id === postId){
              const username = "sergenskenderi";
              const id = post.comments[post.comments.length-1].id + 1;
              const newComment = {
                id : id ,
                username : username ,
                text : event.target[0].value
              }
              post.comments.push(newComment);
            }
            return post;
          })
      
          this.setState({
              posts : pst
          })
    }


    likePost(event,postId) {
        const pst = this.state.posts.map( (post) => {
            if(post.id === postId){
              if(post.liked === true){
                post.likes = post.likes - 1;
                post.liked = false;
              }else{
                post.likes = post.likes + 1;
                post.liked = true;
              }
            }
            return post;
          })
      
          this.setState({
              posts : pst
          })
    }



    render () {
        return (
            <div className="App">
            <SearchBar searchPost={this.searchPost}/>
            {/* Call Post Container for each data from dummyData */}
            {this.state.posts.map( (post) => {
                return <PostContainer key={post.id} post={post} addNewComment={this.addNewComment} likePost={this.likePost}/>
            })}
            </div>
        )
    }
}

export default AppLifecycle;