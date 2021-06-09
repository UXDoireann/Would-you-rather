import React, {Component} from 'react' 
import {connect} from 'react-redux' 
import { Avatar } from '@material-ui/core';


class Question extends Component{

    render(){
        console.log(this.props)

        const {question, user} = this.props

        const {author, optionOne, optionTwo,} = question

      

        return(
            <div className ='question'>
             <Avatar alt={user.name} src={user.avatarURL}/>
                <p>{author}</p>
             <p>{optionOne.text}</p>
             <p>{optionTwo.text}</p>

            </div>
        )
    }
}

function mapStateToProps({ questions, users}, {id}){
    

    return{
      question:questions[id],
      user:users[id]
        
}
}

export default connect(mapStateToProps)(Question)