import React, {Component} from 'react' 
import {connect} from 'react-redux' 
import Question from './Question'
import { Tabs, Tab, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import {Link, withRouter} from 'react-router-dom'



class Dashboard extends Component{



    
    render(){


        
       
     console.log(this.props.questions, this.props.users, this.props.loggedInUser)

      
             const ansQ = Object.keys(this.props.users[this.props.loggedInUser].answers)
             console.log(ansQ)
    
             
         

    
    const unansQ = Object.keys(this.props.questions).filter((question)=>!ansQ.includes(question.id))
    console.log(unansQ)

    

        return(
            <Tabs>
                <TabList className="tablist">
                     <Tab className="tab">Unanswered Questions</Tab>
                    <Tab className="tab">Answered Questions</Tab>
                    </TabList>

                <TabPanel className='questions'>
               <ul className ="question-list">
                   {unansQ.map((id)=>(
                       <li key ={id} >
                           <div className="question_card"><Question id={id} userPic={this.props.users[this.props.questions[id].author].avatarURL}
                        author={this.props.users[this.props.questions[id].author].name}/>
                         <Link  to={`/questions/${id}`}>
             <button className="view_poll">View Question</button>
             </Link>
                        </div>
                       </li>
                   ))}
               </ul>
            </TabPanel>

           <TabPanel className='questions'>
    <ul className ="question-list">
                   {ansQ.map((id)=>(
                       <li key ={id} >
                           <div className="question_card"><Question id={id} userPic={this.props.users[this.props.questions[id].author].avatarURL}
                        author={this.props.users[this.props.questions[id].author].name}/>
                        <Link  to={`/poll/${id}`}>
             <button className="view_poll">View Poll</button>
             </Link></div>
                       </li>
                   ))}
               </ul>
            </TabPanel>
          
        </Tabs>
        )
    }
}

function mapStateToProps({questions, users, loggedInUser}){


 // questions = Object.keys(questions).sort((a, b)=>questions[b].timestamp-questions[a].timestamp)

 
    
 return{
        users,
        questions,
        loggedInUser
      
        
    }
}

export default connect(mapStateToProps)(Dashboard)