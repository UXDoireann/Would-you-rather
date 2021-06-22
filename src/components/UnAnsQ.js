import React, {Component} from 'react' 
import {connect} from 'react-redux' 


class UnAnsQ extends Component{


    render(){

        const{users} = this.props
       

        const{id}=this.props.match.params

       


       
        const question = this.props.questions[id]
      


        //const{optionOne, optionTwo}=question

        


        return(

            <div className ='poll_card'>

            <div className='user'>
           
                <img className='avatar' alt={question.author} src={users[question.author].avatarURL}/>
          
               <h3 className="asks">{users[question.author].name} asks if you'd rather...</h3> 
           </div>

            <div className='actual_question'>
             <p>{question.optionOne.text}</p>
             <p>or</p>
             <p>{question.optionTwo.text}?</p>
            </div>
            </div>


        )
    }
}

function mapStateToProps({questions, users}){

    
    
  

    return{
        questions,
        users,
       
       

    }
}

export default connect(mapStateToProps)(UnAnsQ)