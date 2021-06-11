import React, {Component} from 'react' 
import {connect} from 'react-redux' 




class Question extends Component{

    render(){
      // console.log(this.props)

        const {question} = this.props

        const { optionOne, optionTwo} = question
      
     
        return(
            <div className ='question_card'>

            <div className='user'>
           
                <img className='avatar' alt={this.props.author} src={this.props.userPic}/>
          
               <h3>{this.props.author} asks if you'd rather...</h3> 
           </div>

            <div className='actual_question'>
             <p>{optionOne.text}</p>
             <p>or</p>
             <p>{optionTwo.text}?</p>
            </div>
            
             <button className="view_poll">View Poll</button>
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