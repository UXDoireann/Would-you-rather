import React, {Component} from 'react' 
import {connect} from 'react-redux' 
import Question from './Question'


class Dashboard extends Component{



    
    render(){


       
     console.log(this.props.questions, this.props.users, this.props.loggedInUser)

      
             const ansQ = Object.keys(this.props.users[this.props.loggedInUser].answers)
             console.log(ansQ)
    
             
         

    
    const unansQ = Object.values(this.props.questions).filter((question)=>!ansQ.includes(question.id))
    console.log(unansQ)

        return(
            <div>
           <div className='questions'>
               <h3 className ='center'>Answered Questions</h3>
               <ul className ="question-list">
                   {ansQ.map((id)=>(
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
                   {unansQ.map((id)=>(
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

function mapStateToProps({questions, users}){


 const questionIds = Object.keys(questions).sort((a, b)=>questions[b].timestamp-questions[a].timestamp)

 
    
 return{
        users,
        questions,
        questionIds,
        
    }
}

export default connect(mapStateToProps)(Dashboard)