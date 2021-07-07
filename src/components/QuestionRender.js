import React, {Component} from 'react' 
import {connect} from 'react-redux' 
import UnAnsQ from './UnAnsQ'
import Poll   from './Poll'
import {Redirect} from 'react-router-dom'
//import LoadingBar from 'react-redux-loading'


class QuestionRender extends Component{
    
   

    render(){

        

       

 
       
       const{id, answered}=this.props
     
      if(!id){
        return<Redirect  to={{
            pathname: '/error',
            state: this.props.location,
          }}/>
    }



        return(

                   <div>
                      {answered===true && (<Poll id={id}/>)}
                      {answered===false &&(<UnAnsQ id={id}/>)}

                    </div>

        )
    }
}

function mapStateToProps({questions, users, loggedInUser},props){

    


    const{id}=props.match.params

   

    if(!loggedInUser){
        return<Redirect  to={{
            pathname: '/login',
          }} />
    }


    let answered = Object.keys(users[loggedInUser].answers).includes(id)
    
    
  

    return{
        id,
        answered
       
       

    }
}

export default connect(mapStateToProps)(QuestionRender)