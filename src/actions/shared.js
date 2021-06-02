import{getInitialData} from '../utils/helper'
import{receiveUsers} from '../actions/users'
import {receiveQuestions} from '../actions/questions'

export function getInitialData(){
    return(dispatch)=>{
        return getInitialData()
        .then(({users, questions})=>{
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            
        })
    }
}