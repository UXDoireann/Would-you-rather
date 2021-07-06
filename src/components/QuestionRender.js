import React, {Component} from 'react' 
import {connect} from 'react-redux' 
import UnAnsQ from './UnAnsQ'
import Poll   from './Poll'
import {Redirect} from 'react-router-dom'
//import LoadingBar from 'react-redux-loading'


class QuestionRender extends Component{
    
   

    render(){

        

        //let answered=this.props

        if(this.props.loggedInUser===null){
            return<Redirect to ='/'/>
        }
    
      // const ansQ = Object.keys(this.props.users[this.props.loggedInUser].answers)
       //const unansQ = Object.keys(this.props.questions).filter((question)=>!ansQ.includes(question))
       const{id, answered}=this.props
       //console.log(unansQ)
 


        return(

<div>
{answered===true && (<Poll id={id}/>)}
{answered===false &&(<UnAnsQ id={id}/>)}

</div>

        )
    }
}

function mapStateToProps({questions, users, loggedInUser},props){

    const{id}=props.match.params
    let answered = Object.keys(users[loggedInUser].answers).includes(id)
    
    
  

    return{
        id,
        answered
       
       

    }
}

export default connect(mapStateToProps)(QuestionRender)