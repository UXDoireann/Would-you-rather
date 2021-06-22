import React, {Component} from 'react' 
import {connect} from 'react-redux' 
import {Redirect} from 'react-router-dom'


class Leaderboard extends Component{

    render(){

        if(this.props.loggedInUser===null){
            return<Redirect to ='/error'/>
        }


        const {users}=this.props

        const leaders = Object.values(users)

        const ratedLeaders = leaders.map(data=>{

            let obj = {}
            obj={
                name: data.name,
                pic: data.avatarURL,
                noQ: data.questions.length,
                noA: (Object.keys(data.answers)).length,
                score:(Object.keys(data.answers)).length+data.questions.length
            }

            return obj
        })

        ratedLeaders.sort((a,b)=>b.score-a.score)
        console.log(ratedLeaders)
     

       

        return(


            <div>
                <h1>Leaderboard</h1>

            <ul className = 'leaders'>
           
           
                   {ratedLeaders.map((user)=>(
                       <li key ={user.name} >
                           <div className="leader_card">
                    <div className="leader_pic">
                   <img className="avatar" alt ={user.name} src={user.pic} />  {user.name}
                    </div>
                    <div className="scores">
                        Asked Questions: {user.noQ}<br></br>Answered Questions: {user.noA}<br></br>Score: {user.score}
                    </div>
                        </div>
                       </li>
                   ))}      
           
            </ul>

                </div>
        )
    }
}

function mapStateToProps({users, loggedInUser}){
    return{
        users,
        loggedInUser
    }
}


export default connect(mapStateToProps)(Leaderboard)