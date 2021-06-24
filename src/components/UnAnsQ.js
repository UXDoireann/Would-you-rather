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
       let {option}= e.target.value
      /* this.setState(()=>({option:option,
       toPoll:false}))*/
        console.log(option)
       }

       



     /*  handleSubmit=(e)=>{
        e.preventDefault()
        let {option}=this.state
        const{dispatch}=this.props
 
        
        dispatch(handleQuestionAnswer(option))
        this.setState(()=>({option:option, toPoll:true}))
    }*/
 


  


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
             <input type="radio"  name ="vote"  id="one" value={question.optionOne} onChange={this.handleChange}/>
             <p className="or">or</p>
             <label >{question.optionTwo.text}?</label>
             <input type="radio" name="vote" id="two" value={question.optionTwo}/>
             <button className ="view_poll" type="submit" onClick={this.handleSubmit} onChange={this.handleChange} >Save Answer</button>
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