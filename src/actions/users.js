import {_getUsers} from '.../utils/_DATA.js'

export const RECEIVE_USERS='RECEIVE_USERS'

export function receiveUsers(users){
    return{
        type:RECEIVE_USERS,
        users,
    }
}