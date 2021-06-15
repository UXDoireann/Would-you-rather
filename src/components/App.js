import React, {Component} from 'react'
import '../App.css';
import{connect} from 'react-redux'
import{handleInitialData} from '../actions/shared'
import Login from './Login'




class App extends Component{

  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }



  render(){

    console.log(this.props.users)

  return (
    <div>
       <Login/>
     
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
