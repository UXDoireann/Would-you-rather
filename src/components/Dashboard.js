import React, {Component} from 'react' 
import {connect} from 'react-redux' 
import Question from './Question'

class Dashboard extends Component{
    render(){
       
        return(
            <div>
               <h3 className ='center'>Questions</h3>
               <ul className ="question-list">
                   {this.props.questionIds.map((id)=>(
                       <li key ={id} userPic={this.props.userPic[id.author.avatarURL]}>
                           <div><Question id={id}/></div>
                       </li>
                   ))}
               </ul>
            </div>
        )
    }
}

function mapStateToProps({questions, users}){

 const userPic = users
 const questionIds = Object.keys(questions).sort((a, b)=>questions[b].timestamp-questions[a].timestamp)
    
 return{
        questionIds,
        userPic
        
    }
}

export default connect(mapStateToProps)(Dashboard)