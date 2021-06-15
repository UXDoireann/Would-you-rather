import React, {Component} from 'react' 
import {connect} from 'react-redux' 
import Question from './Question'


class Dashboard extends Component{
    render(){


       
     // console.log(this.props.questions, this.props.users)

        return(
            <div>
           <div className='questions'>
               <h3 className ='center'>Answered Questions</h3>
               <ul className ="question-list">
                   {this.props.questionIds.map((id)=>(
                       <li key ={id} >
                           <div><Question id={id} userPic={this.props.users[this.props.questions[id].author].avatarURL}
                        author={this.props.users[this.props.questions[id].author].name}/></div>
                       </li>
                   ))}
               </ul>
            </div>
            <div className='questions'>
               <h3 className ='center'>Unanswered Questions</h3>
               <ul className ="question-list">
                   {this.props.questionIds.map((id)=>(
                       <li key ={id} >
                           <div><Question id={id} userPic={this.props.users[this.props.questions[id].author].avatarURL}
                        author={this.props.users[this.props.questions[id].author].name}/></div>
                       </li>
                   ))}
               </ul>
            </div>
        </div>
        )
    }
}

function mapStateToProps({questions, users, loggedInUser}){


 const questionIds = Object.keys(questions).sort((a, b)=>questions[b].timestamp-questions[a].timestamp)

 const answered=Object.keys(users[loggedInUser].answers)
 const unanswered = Object.values(questions).filter((question)=>!answered.includes(question.id))
    
 return{
        users,
        questions,
        questionIds,
        answered,
        unanswered   
    }
}

export default connect(mapStateToProps)(Dashboard)