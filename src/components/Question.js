import React, {Component} from 'react' 
import {connect} from 'react-redux' 


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
        questions:question
}
}

export default connect(mapStateToProps)(Question)