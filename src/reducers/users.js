import {RECEIVE_USERS, SAVE_USER_ANSWER} from '../actions/users'

export default function users (state={}, action){
 switch(action.type){
     case RECEIVE_USERS:
         return{
             ...state,
             ...action.users
         }
        /* case SAVE_USER_ANSWER:
              return  {...users,
              [authedUser]: {
                ...users[authedUser],
                answers: {
                  ...users[authedUser].answers,
                  [qid]: answer
                }
              }
            }*/
         default:
             return state
 }
}