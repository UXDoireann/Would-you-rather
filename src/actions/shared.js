import{getInitialData} from '../utils/helper'
import{receiveUsers} from './users'
import {receiveQuestions} from './questions'
import {setLoggedInUser} from './loggedInUser'

export function getInitialData(){
    return(dispatch)=>{
        return getInitialData()
        .then(({users, questions})=>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            
        })
    }
}