import React, {Component} from 'react' 
import {connect} from 'react-redux' 


class Question extends Component{

    render(){
        console.log(this.props)

        const {question} = this.props

      

        return(
            <div className ='question'>
                <p>{question.author}</p>
             <p>{question.optionOne.text}</p>
             <p>{question.optionTwo.text}</p>

            </div>
        )
    }
}

function mapStateToProps({ questions}, {id}){
    

    return{
      question:questions[id]
        
}
}

export default connect(mapStateToProps)(Question)