
import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from "react-bootstrap/Navbar";
import {logOutUser} from '../actions/loggedInUser'



class Navig extends Component{

     

    render(){
    
const handleLogOut=(e)=>{
    e.preventDefault();
   
    this.setState(()=>({loggedInUser:null
        }))
        this.props.dispatch(logOutUser)
        console.log("logged out")
   
}


return(
    <nav className = 'nav'>
    <ul className = 'nav_list'>
    <li>
 <NavLink to = "/home" exact className='link' >
        Home
    </NavLink>
    </li>
    <li>
        <NavLink to = '/leaderboard' exact className='link'>
            Leaderboard
        </NavLink>
    </li>
        <li>
            <NavLink to ="/" exact className='link' >
               Log in
             </NavLink>
            </li>
            <li>
                <Navbar.Text>
                 {this.props.loggedInUser!==null?(
                     <div className ="who">
                         <div className ="hello">Hello {this.props.name}</div>
                         <img className='pic' alt={this.props.name} src={this.props.avatar}/>
                         <button className="logout" onClick={handleLogOut}>Log out</button>
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
