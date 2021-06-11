import React, {Component} from 'react' 
import {connect} from 'react-redux' 
import Question from './Question'


class Dashboard extends Component{
    render(){

     // console.log(this.props.questions, this.props.users)

        return(
            <div>
               <h3 className ='center'>Questions</h3>
               <ul className ="question-list">
                   {this.props.questionIds.map((id)=>(
                       <li key ={id} >
                           <div><Question id={id} userPic={this.props.users[this.props.questions[id].author].avatarURL}
                        author={this.props.users[this.props.questions[id].author].name}/></div>
                       </li>
                   ))}
               </ul>
            </div>
        )
    }
}

function mapStateToProps({questions, users}){


 const questionIds = Object.keys(questions).sort((a, b)=>questions[b].timestamp-questions[a].timestamp)
    
 return{
        users,
        questions,
        questionIds    
    }
}

export default connect(mapStateToProps)(Dashboard)