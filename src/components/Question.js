import React, {Component} from 'react' 
import {connect} from 'react-redux' 
import { Avatar } from '@material-ui/core';


class Question extends Component{

    render(){
        console.log(this.props)

        const {question, userPic} = this.props

        const { optionOne, optionTwo, author} = question
      

      

        return(
            <div className ='question'>
             
                <p>{author}</p>
             <p>{optionOne.text}</p>
             <p>{optionTwo.text}</p>
<Avatar alt={author} src={userPic}/>
            </div>
        )
    }
}

function mapStateToProps({ questions, users}, {id}){
    const question = questions[id];
    const user = users[question.author];

    return{
     question,
     user
        
}
}

export default connect(mapStateToProps)(Question)