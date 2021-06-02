import React from "react";
import PostContainer from "./componentsLifecycle/PostContainer/PostContainer";
import SearchBar from "./componentsLifecycle/SearchBar/SearchBar";
import dummyData from "./dummy-data";
// import Fuse from "fuse.js";


class AppLifecycle extends React.Component{
    state = {
        posts : [],
        allPosts : [],
        error : "",
        searchTxt : "",
    }

    constructor(){
        super();
        this.addNewComment = this.addNewComment.bind(this);
        this.likePost = this.likePost.bind(this);
        this.searchPost = this.searchPost.bind(this);
        this.removeComment = this.removeComment.bind(this);
        // this.searchFusePost = this.searchFusePost.bind(this);
    }

    componentDidMount() {
        this.setState({
            allPosts : dummyData
        })
        if(localStorage.getItem("posts")){
            this.setState({
                posts : JSON.parse(localStorage.getItem("posts"))
            })
        }else{
        this.setState({
            posts : dummyData
        })
        }
    }

    searchPost(event){        
        if(event.target[0].value === "all"){
            this.setState({
                searchTxt : 'all'
            })
        }else{
            const pst = [];
            // eslint-disable-next-line
            this.state.allPosts.map( (post) => {
                if(event.target[0].value === post.username){
                    pst.push(post);
                    return post;
                }
            });
            if(pst.length > 0){
            this.setState({
                posts : pst
            })
            }else{
                this.setState({
                    posts : [],
                    error : "No User Found"
                })
            }
        }
    }

    // searchFusePost(event){
    //     const options = {
    //         shouldSort: true,
    //         threshold: 0.1,
    //         location: 0,
    //         distance: 100,
    //         keys: [
    //           'username'
    //         ]
    //       };
    //     const fuse = new Fuse(this.state.allPosts , options);

    //     const result = fuse.search(event.target.value);
    // }

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
          localStorage.removeItem("posts");
          localStorage.setItem("posts",JSON.stringify(pst));
    }


    removeComment(commentId,postId){
        const pst = this.state.posts.map( (post) => {
            if(post.id === postId){
                var elementPos = post.comments.map(function(x) {return x.id; }).indexOf(commentId);
                if(elementPos !== -1){
                    post.comments.splice(elementPos,1);
                }
            }
            return post;
        })

        this.setState({
            posts : pst,
            deleted : "deleted"
        })
        localStorage.removeItem("posts");
        localStorage.setItem("posts",JSON.stringify(pst));
    }

    likePost(postId) {
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
            <SearchBar searchPost={this.searchPost} searchFusePost={this.searchFusePost}/>
            {/* Call Post Container for each data from dummyData */}
            {this.state.error && <h6 style={{marginTop : '100px'}}>{this.state.error}</h6>}
            {this.state.posts.map( (post) => {
                return <PostContainer key={post.id} post={post} addNewComment={this.addNewComment} likePost={this.likePost}
                 removeComment={this.removeComment}/>
            })}
            </div>
        )
    }
}

export default AppLifecycle;