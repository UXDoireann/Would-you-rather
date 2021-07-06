import React, {Component} from 'react' 
import {connect} from 'react-redux' 





class Question extends Component{

    render(){

        const {question} = this.props
        const { optionOne, optionTwo} = question

        
      
     
        return(
            <div >

            <div className='user'>
           
                <img className='avatar' alt={this.props.author} src={this.props.userPic}/>
          
               <h3 className="asks">{this.props.author} asks if you'd rather...</h3> 
           </div>

            <div className='actual_question'>
             <p className="q">{optionOne.text}</p>
             <p className="q">or</p>
             <p className="q">{optionTwo.text}?</p>
            </div>
           
</div>
        )
        }
      }
    


function mapStateToProps({ questions, users}, {id}){
    const question = questions[id];

    return{
     question,
    
        
}
}

export default connect(mapStateToProps)(Question)