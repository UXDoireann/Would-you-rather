import React, {Component} from 'react' 

class Login extends Component{

    render(){

        return(

<div className="login">
    <h1>Welcome to "Would you Rather..?"</h1>
    <h2>Enjoyed by deep thinkers everywhere!</h2>
    <div className="login_form">
     <p>Sign In:</p>
     <select>
     {this.props.users.map((user)=>(
             <option value={this.props.users.name}>
                 {this.props.users.name}
             </option>
         ))}
     </select>
      
    </div>




</div>
        )
    }
}

export default Login