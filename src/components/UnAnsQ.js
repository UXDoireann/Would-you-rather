import React, {Component} from 'react' 
import {connect} from 'react-redux' 
import {handleQuestionAnswer} from '../actions/shared'
import {Redirect} from 'react-router-dom'




class UnAnsQ extends Component{



    state={
        choice:'',
      
    }

   

   

   handleChange=(e)=>{
       let option= e.target.value
      this.setState(()=>({choice:option,
     
    }))
        console.log(option)
       }

       



     handleSubmit=(e)=>{
        e.preventDefault()
        const{dispatch, questions, loggedInUser, id}=this.props
        const question = this.props.questions[id]
        console.log(questions)
        let option = e.target.value
       this.setState(()=>({choice:option}))
        dispatch(handleQuestionAnswer({
            authedUser:loggedInUser,
            qid: question.id,
            answer:this.state.choice
        }))

 
    
    }
 


  


    render(){

        const{users, id} = this.props
       const question = this.props.questions[id]
       console.log(question)



       if(!id){
        return<Redirect to='/error'/>
    }

   


        


        return(

            <div className ='poll_card'>

            <div className='user'>
           
                <img className='avatar' alt={question.author} src={users[question.author].avatarURL}/>
          
               <h3 className="asks">{users[question.author].name} asks if you'd rather...</h3> 
           </div>

            <div className='actual_question'>
                <form  onChange={this.optionChange}>
             <label >{question.optionOne.text}  <input type="radio"  name ="vote"  id="one" value="optionOne" onChange={this.handleChange}/></label>
           
             <p className="or">or</p>
             <label >{question.optionTwo.text}?  <input type="radio" name="vote" id="two" value="optionTwo" onChange={this.handleChange}/></label>
           
        
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