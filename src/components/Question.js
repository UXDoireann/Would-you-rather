import React, {Component} from 'react' 
import {connect} from 'react-redux' 
import {formatQuestion} from '../utils/_DATA'

class Question extends Component{

    render(){
        console.log(this.props)

        return(
            <div className ='question'>

            </div>
        )
    }
}

function mapStateToProps({loggedInUser, users, questions}, {id}){
    const question = questions[id]

    return{
        loggedInUser,
        questions: formatQuestion(question, users[question.author], loggedInUser)
    }
}

export default connect(mapStateToProps)(Question)