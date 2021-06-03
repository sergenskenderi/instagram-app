import React from "react";
// import Fuse from "fuse.js";
import PostsPage from "./componentsLifecycle/PostContainer/PostsPage";
import withAuthenticate from "./componentsLifecycle/authentication/withAuthenticate";
import Login from "./componentsLifecycle/login/Login";

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);

class AppLifecycle extends React.Component{
    render () {
        return (
            <div className="App">
            {localStorage.getItem("error") && <h6 style={{marginTop : '100px' , color : 'red'}}>{localStorage.getItem("error")}</h6>}
            <ComponentFromWithAuthenticate />
            </div>
        )
    }
}

export default AppLifecycle;