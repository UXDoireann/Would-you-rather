import React, {Component} from 'react' 
import {connect} from 'react-redux' 
import { Avatar } from '@material-ui/core';


class Question extends Component{

    render(){
       console.log(this.props)

        const {question} = this.props

        const { optionOne, optionTwo} = question
      

      

        return(
            <div className ='question'>
             <Avatar  alt={this.props.author} src={this.props.userPic}/>
           
             <h3>{this.props.author}</h3> 
             <p>Would you rather...?</p> 
             <p>{optionOne.text}</p>
             <p>{optionTwo.text}</p>
</div>
        )
    }
}

function mapStateToProps({ questions, users}, {id}){
    const question = questions[id];
   // const user = users[question.author];

    return{
     question,
     //user
        
}
}

export default connect(mapStateToProps)(Question)