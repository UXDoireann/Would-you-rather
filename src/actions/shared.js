import{getInitialData, saveQuestionAnswer} from '../utils/helper'
import { _saveQuestion} from '../utils/_DATA'
import{receiveUsers,  saveUserAnswer, saveUserQuestion} from './users'
import {receiveQuestions, saveAnswer, addQuestion} from './questions'
import {setLoggedInUser} from './loggedInUser'
import {logOutUser} from './loggedInUser'
import {showLoading, hideLoading} from 'react-redux-loading'


let LOGGED_ID = null

export function handleInitialData(){
    return(dispatch)=>{
        dispatch(showLoading())
        return getInitialData()
        .then(({users, questions})=>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            dispatch(setLoggedInUser(LOGGED_ID))
            dispatch(logOutUser(null))
            dispatch(hideLoading())
            
        })
    }
}

export function handleQuestionAnswer({authedUser, qid, answer}){
    return(dispatch)=>{
        
       dispatch(showLoading())
        return saveQuestionAnswer({authedUser, qid, answer})
        .then(()=>{
            dispatch(saveAnswer(authedUser, qid, answer))
            dispatch(saveUserAnswer(authedUser, qid, answer))
           dispatch(hideLoading())
        })
    }
}


export function handleNewQuestion(optionOneText, optionTwoText){
    return(dispatch, getState)=>{
       const{loggedInUser}=getState()
        dispatch(showLoading())
        return _saveQuestion({optionOneText, optionTwoText, author:loggedInUser})
        .then(question=>{
            dispatch(addQuestion(question))
            dispatch(saveUserQuestion(question))
            dispatch(hideLoading())
        })
    }
}
    

