import React, {Component} from 'react'
import {Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import{connect} from 'react-redux'
import{handleInitialData} from '../actions/shared'
import Login from './Login'
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading'
import Navig from './Nav'





class App extends Component{


  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }



  render(){

 

  return (
    <Router>
    <Fragment>
      <LoadingBar/>
     <div className = 'container'>
       <Navig/>
       {this.props.loading===true
       ?null
      :<div>
        <Route path='/' exact component = {Login}/>
              <Switch>
          <Route path ='/home' component={Dashboard}/>
          </Switch>
    </div>}
    </div>
     </Fragment>
    </Router>
  );
}
}

function mapStateToProps({users, loggedInUser}){
  return{
     loading:users === null,
     loggedInUser
  }
}

export default connect(mapStateToProps)(App);
