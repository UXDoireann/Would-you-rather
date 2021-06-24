import React, {Component} from 'react' 
import {connect} from 'react-redux' 


class Poll extends Component{


    render(){

        const{users, loggedInUser} = this.props
       
       
       

        const{id}=this.props.match.params

        const answer = users[loggedInUser].answers[id]
       
        console.log(answer)



        


       
        const question = this.props.questions[id]
        const optionOne = question.optionOne
        const optionTwo = question.optionTwo
        const totalVotes = optionOne.votes.length + optionTwo.votes.length


        const yourAnswer = question[answer].text




        //const{optionOne, optionTwo}=question

        


        return(

            <div className ='poll_card'>

            <div className='user'>
           
                <img className='avatar' alt={question.author} src={users[question.author].avatarURL}/>
          
              
           </div>

            <div className='actual_question'>
            <p className="q">You said you would rather {yourAnswer} </p>

             <p className="q">{question.optionOne.votes.length / totalVotes * 100}% chose option 1 <br></br>({question.optionOne.text}) <br></br> Votes:{question.optionOne.votes.length}</p>
            
             <p className="q">{question.optionTwo.votes.length / totalVotes * 100}% chose option 2 <br></br> ({question.optionTwo.text}) <br></br>Votes:{question.optionTwo.votes.length}</p>

             
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

export default connect(mapStateToProps)(Poll)