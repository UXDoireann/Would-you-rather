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
        this.setState(()=>({loggedInUser:loggedInUser,
        toHome:false}))
        console.log(loggedInUser)
       }

   handleSubmit=(e)=>{
       e.preventDefault()
       let {loggedInUser}=this.state
       const{dispatch}=this.props

       if(!loggedInUser){
           loggedInUser=this.props?.users[0]?.id
       }
       dispatch(setLoggedInUser(loggedInUser))
       this.setState(()=>({loggedInUser:loggedInUser, toHome:true}))
   }

  


    render(){

     
        const users = Object.values(this.props.users)

        if(this.state.toHome===true){
            return<Redirect to ='/home'/>
        }

        
    

     

        

        return(


<div className="loggy" >
    <div className ="loggytwo">
    <div className="intro">
    <h3>Welcome to:</h3>
    <h1>"Would you Rather..?"</h1>
  
    </div>
   
     
     <form className="login" >
     
      
     <p className="q">First of all, who are you?</p>
     <select onChange={this.handleChange} >
         {users.map((user)=>(
             <option key ={user.id} value={user.id}>
                 {user.name}
             </option>
         ))}
     </select>
     <button className='login_button' onClick={this.handleSubmit}>Login</button>
     <br></br><br></br>
     
    </form>

   



</div>
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