import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setLoggedInUser} from '../actions/loggedInUser' 


class Login extends Component{

   state={
       loggedInUser:''
   }

    

    handleChange=(e)=>{
        const loggedInUser=e.target.value
        this.setState(()=>({loggedInUser:loggedInUser}))
        console.log(loggedInUser)
       }

   handleSubmit=(e)=>{
       e.preventDefault()
       const{loggedInUser}=this.state
       const{dispatch}=this.props
       dispatch(setLoggedInUser(loggedInUser))
   }

  


    render(){

     
        const users = Object.values(this.props.users)

        
    

     

        

        return(


<div className="login">
    <h1>Welcome to "Would you Rather..?"</h1>
    <h2>Enjoyed by deep thinkers everywhere!</h2>
   
     
     <form className="login_form" onSubmit={this.handleSubmit}>
     
      
     <label>Select User: </label>
     <select onChange={this.handleChange}>
         {users.map((user)=>(
             <option key ={user.id} value={user.id}>
                 {user.name}
             </option>
         ))}
     </select><br></br><br></br>
     
    </form>

   




</div>
        )
    }

}

function mapStateToProps({users, questions}, {loggedInUser}){

   
return{
    users: Object.keys(users).map(id =>  {
        return {id: users[id]['id'], name : users[id]['name']}}),
        loggedInUser
     

        
    
    
  }
}


export default connect(mapStateToProps)(Login)