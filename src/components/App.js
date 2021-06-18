import React, {Component} from 'react'
import '../App.css';
import{connect} from 'react-redux'
import{handleInitialData} from '../actions/shared'
import Login from './Login'
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading'




class App extends Component{

  state={
    loggedInUser:'simonedebeauvoir'
  }

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }



  render(){

    console.log(this.props.users)

  return (
    <div>
      <LoadingBar/>
       <Login loggedInUser={this.state.loggedInUser}/>
       <Dashboard loggedInUser={this.state.loggedInUser} />
  </div>
  );
}
}

function mapStateToProps({authedUser, users}){
  return{
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(App);
