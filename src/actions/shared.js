import{getInitialData, saveQuestionAnswer} from '../utils/helper'
import{receiveUsers,  saveUserAnswer} from './users'
import {receiveQuestions, saveAnswer} from './questions'
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

export function handleQuestionAnswer(){
    return(dispatch)=>{
       dispatch(showLoading())
       return saveQuestionAnswer()
        .then(({questionId,loggedInUser, answer, userId })=>{
            dispatch(saveAnswer(questionId, loggedInUser, answer))
            dispatch(saveUserAnswer(userId, answer))
        })
    }

}

