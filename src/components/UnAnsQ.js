import React, {Component} from 'react' 
import {connect} from 'react-redux' 
import {handleQuestionAnswer} from '../actions/shared'


class UnAnsQ extends Component{



    state={
        choice:'',
        toPoll:false
    }

   

   

   handleChange=(e)=>{
       e.preventDefault()
       let option= e.target.value
      this.setState(()=>({choice:option,
       toPoll:false}))
        console.log(option)
       }

       



     handleSubmit=(e)=>{
        e.preventDefault()
        const{dispatch, questions, loggedInUser}=this.props
        const{id}=this.props.match.params
        const question = this.props.questions[id]
        let option = e.target.value
        this.setState(()=>({choice:option, toPoll:false}))
        dispatch(handleQuestionAnswer({
            authedUser:loggedInUser,
            qid: question.id,
            answer:this.state.choice
        }))

 
    
    }
 


  


    render(){

        const{users} = this.props
       

        const{id}=this.props.match.params
        const question = this.props.questions[id]



      


      

        


        return(

            <div className ='poll_card'>

            <div className='user'>
           
                <img className='avatar' alt={question.author} src={users[question.author].avatarURL}/>
          
               <h3 className="asks">{users[question.author].name} asks if you'd rather...</h3> 
           </div>

            <div className='actual_question'>
                <form  onChange={this.optionChange}>
             <label >{question.optionOne.text}</label>
             <input type="radio"  name ="vote"  id="one" value="optionOne" onChange={this.handleChange}/>
             <p className="or">or</p>
             <label >{question.optionTwo.text}?</label>
             <input type="radio" name="vote" id="two" value="optionTwo" onChange={this.handleChange}/>
             <button className ="view_poll" type="submit" onClick={this.handleSubmit}  >Save Answer</button>
             </form>
            </div>
           
            </div>


        )
    }
}

function mapStateToProps({questions, users, loggedInUser}){

    
    
  

    return{
        questions,
        users,
        loggedInUser
       
       

    }
}

export default connect(mapStateToProps)(UnAnsQ)