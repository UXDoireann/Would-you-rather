import React, {Component} from 'react' 
import {connect} from 'react-redux' 
import Question from './Question'
import { Tabs, Tab, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'



class Dashboard extends Component{

    state={
        answered:false,
    }

   
    
    render(){
 console.log(this.props.questions)

        if(this.props.loggedInUser===null){
            return<Redirect  to={{
                pathname: '/login',
                state: this.props.location,
              }}/>
        }
    
       


      
            const ansQ = Object.keys(this.props.users[this.props.loggedInUser].answers)
            ansQ.sort((a,b)=>this.props.questions[b].timestamp-this.props.questions[a].timestamp)
            const unansQ = Object.keys(this.props.questions).filter((question)=>!ansQ.includes(question))
            unansQ.sort((a,b)=>this.props.questions[b].timestamp-this.props.questions[a].timestamp)
 

    

        return(
            <Tabs className="list">
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
                        <Link  to={{
                             pathname:`/questions/${id}` , 
                             state:{answered:false}
                        }}>
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
                        <Link  to={{
                             pathname:`/questions/${id}` , 
                             state:{answered:true}
                        }}>
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

const mapStateToProps = (state)=>{
 


 // questions = Object.keys(questions).sort((a, b)=>questions[b].timestamp-questions[a].timestamp)

 
    
 return{
        users:state.users,
        questions:state.questions,
        loggedInUser:state.loggedInUser
      
        
 }
}

export default connect(mapStateToProps)(Dashboard)