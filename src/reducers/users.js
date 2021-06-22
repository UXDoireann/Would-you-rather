import {RECEIVE_USERS, SAVE_USER_ANSWER} from '../actions/users'

export default function users (state={}, action){
 switch(action.type){
     case RECEIVE_USERS:
         return{
             ...state,
             ...action.users
         }
         case SAVE_USER_ANSWER:
              return {
                ...state,
                [action.loggedInUser]: {
                  ...state[action.loggedInUser],
                  questions: state[action.loggedInUser].questions.concat([action.question.id])
                }
              }
         default:
             return state
 }
}