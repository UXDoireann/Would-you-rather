import React, {Component} from 'react' 
import {connect} from 'react-redux' 
import {handleQuestionAnswer} from '../actions/shared'


class UnAnsQ extends Component{

    state={
        option:'',
        //toPoll:false
    }

    handleChange=(e)=>{
       e.preventDefault()
       const option= e.target.value
        /*const {dispatch}=this.props
        dispatch(handleQuestionAnswer(option))
        this.setState(()=>({option:option}))*/
        console.log(option)
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
                <form onSubmit={this.handleChange}>
             <label for="one">{question.optionOne.text}</label>
             <input type="radio"  name ="vote"  id="one" value={question.optionOne}/>
             <p className="or">or</p>
             <label for="two">{question.optionTwo.text}?</label>
             <input type="radio" name="vote" id="two" value={question.optionTwo}/>
             <button className ="view_poll" type="submit" >Save Answer</button>
             </form>
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