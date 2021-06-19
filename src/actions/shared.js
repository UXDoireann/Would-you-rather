import{getInitialData} from '../utils/helper'
import{receiveUsers} from './users'
import {receiveQuestions} from './questions'
import {setLoggedInUser} from './loggedInUser'
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
            dispatch(hideLoading())
            
        })
    }
}