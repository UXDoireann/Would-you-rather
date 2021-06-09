import React, {Component} from 'react' 
import {connect} from 'react-redux' 
//import { Avatar } from '@material-ui/core';


class Question extends Component{

    render(){
        console.log(this.props)

        const {question} = this.props

        const {author, id, optionOne, optionTwo, timestamp} = question

      

        return(
            <div className ='question'>
                
                <p>{author}</p>
             <p>{optionOne.text}</p>
             <p>{optionTwo.text}</p>

            </div>
        )
    }
}

function mapStateToProps({ questions}, {id}){
    

    return{
      question:questions[id],
      //users:users[id]
        
}
}

export default connect(mapStateToProps)(Question)