import {SET_LOGGED_IN_USER, LOG_OUT_USER} from '../actions/loggedInUser'

export default function loggedInUser(state=null, action){
    switch(action.type){
        case SET_LOGGED_IN_USER:
            return action.id;
            case LOG_OUT_USER: 
            return null;
            default:
                return state;
    }
}