
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";


class Navig extends Component{

    render(){
    



return(
    <nav className = 'nav'>
    <ul className = 'nav_list'>
    <li>
 <NavLink to = "/home" exact activeClassName="active" >
        Home
    </NavLink>
    </li>
        <li>
            <NavLink to ="/" exact activeClassName="active" >
               Log in
             </NavLink>
            </li>
            <li>
                <Navbar.Text>
                 {this.props.loggedInUser!==null?(
                     <div>
                         <div>Hello {this.props.loggedInUser}</div>
                         <img className='avatar' alt={this.props.name} src={this.props.avatar}/>
                         <button >Log out</button>
                     </div>
                 ):null}
                </Navbar.Text>
            </li>
          
    

    </ul>
    </nav>




)
                 }
                }

    


function mapStateToProps({loggedInUser, users}){
    
    return{
        loggedInUser,
        avatar: loggedInUser? users[loggedInUser].avatarURL:null,
        name: loggedInUser? users[loggedInUser].name:null
    }
}

export default connect(mapStateToProps)(Navig)
