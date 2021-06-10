import React, {Component} from 'react' 
import {connect} from 'react-redux' 
import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';



class Question extends Component{

    render(){
       console.log(this.props)

        const {question} = this.props

        const { optionOne, optionTwo} = question
      
        const useStyles = makeStyles((theme) => ({
          root: {
            display: 'flex',
            '& > *': {
              margin: theme.spacing(1),
            },
          },
          small: {
            width: theme.spacing(3),
            height: theme.spacing(3),
          },
          large: {
            width: theme.spacing(7),
            height: theme.spacing(7),
          },
        }));
        
        export default function ImageAvatars() {
          const classes = useStyles(); 
        

        return(
            <div className ='question_card'>

            <div className='user'>
            <div className={classes.root}>
                <Avatar  className='avatar' alt={this.props.author} src={this.props.userPic}/>
           </div>
               <h3>{this.props.author} asks if you'd rather...</h3> 
           </div>

            <div className='actual_question'>
             <p>{optionOne.text}</p>
             <p>or</p>
             <p>{optionTwo.text}?</p>
            </div>
            
             <button className="view_poll">View Poll</button>
</div>
        )
        }
      }
    }


function mapStateToProps({ questions, users}, {id}){
    const question = questions[id];
   // const user = users[question.author];

    return{
     question,
     //user
        
}
}

export default connect(mapStateToProps)(Question)