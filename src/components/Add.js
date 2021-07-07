import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {handleNewQuestion} from '../actions/shared'

class Add extends Component{


    state={
        optionOne:'',
        optionTwo:'',
        submittedQuestion:false
      
    }

   

   

   handleOptionOne=(e)=>{
       e.preventDefault()
       let optionOne= e.target.value
      this.setState(()=>({optionOne:optionOne
     
    }))
        //console.log(optionOne)
       }

    
    handleOptionTwo=(e)=>{
        e.preventDefault()
        let optionTwo=e.target.value
       this.setState(()=>({optionTwo:optionTwo
    }))
   // console.log(optionTwo)
}

       



     handleSubmit=(e)=>{
        e.preventDefault()
        const{dispatch, loggedInUser}=this.props
        const{optionOne, optionTwo}=this.state
     
        dispatch(handleNewQuestion({
            optionOneText:optionOne,
            optionTwoText:optionTwo,
            author:loggedInUser
         } ))
        this.setState(()=>({optionOne:''}))
        this.setState(()=>({optionTwo:''}))
        this.setState(()=>({submittedQuestion:true}))
    
    }


    render(){

        if(this.state.submittedQuestion===true){
            return<Redirect to ={`/`}/>
        }

        if(this.props.loggedInUser===null){
            return<Redirect to={{
                pathname: '/login',
                state: this.props.location,
              }} />
        }

    return(
  
        <div className="new_question_card">
            <h3>Would you rather...</h3>

            <form >
       <input className="add" type="text" placeholder="write first option here" onChange={this.handleOptionOne}></input><br></br>
       <p className="or">or</p><br></br>
       <input className="add" type="text" placeholder="write second option here" onChange={this.handleOptionTwo}></input><br></br>
            </form>

            <button className="view_poll" type="submit" disabled={this.state.optionOneText === "" || this.state.optionTwoText === ""}
            onClick={this.handleSubmit}>Add Question</button>

        </div>



    )
}
     
     }

function mapStateToProps({loggedInUser}){
    return{
        loggedInUser
    }
}

export default connect(mapStateToProps)(Add)