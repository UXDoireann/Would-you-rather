import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setLoggedInUser} from '../actions/loggedInUser' 
import {Redirect} from 'react-router-dom'


class Login extends Component{

   state={
       loggedInUser:'',
       toHome:false,
   }

    

    handleChange=(e)=>{
        const loggedInUser=e.target.value
        const {dispatch}=this.props
        dispatch(setLoggedInUser(loggedInUser))
        this.setState(()=>({loggedInUser:loggedInUser,
        toHome:true}))
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

        if(this.state.toHome===true){
            return<Redirect to ='/home'/>
        }

        
    

     

        

        return(


<div className="login" onSubmit={this.handleSubmit}>
    <h3>Welcome to:</h3>
    <h1>"Would you Rather..?"</h1>
    <p>Enjoyed by deep thinkers everywhere!</p>
   
     
     <form className="login_form" >
     
      
     <label>First of all, who are you?</label>
     <select onChange={this.handleChange}  >
         {users.map((user)=>(
             <option key ={user.id} value={user.id}>
                 {user.name}
             </option>
         ))}
     </select>
     
     <br></br><br></br>
     
    </form>

   




</div>
        )
    }

}

function mapStateToProps({users, questions, loggedInUser}){

   
return{
    users: Object.keys(users).map(id =>  {
        return {id: users[id]['id'], name : users[id]['name']}}),
        loggedInUser
     

        
    
    
  }
}


export default connect(mapStateToProps)(Login)