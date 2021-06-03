import React from "react";

const withAuthenticate = App => Login =>
  class extends React.Component {
    state = {
      loggedIn : false
    }

    componentDidMount () {
      if(localStorage.getItem("username")){
        this.setState({
          loggedIn : true
        })
      }else{
        this.setState({
          loggedIn : false
        })
      }
    }

    render () {
       if(this.state.loggedIn){
        return <App />
       }else{
        return <Login />
       }
    }
  };

export default withAuthenticate;