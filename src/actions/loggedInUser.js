export const SET_LOGGED_IN_USER='SET_LOGGED_IN_USER'
export const LOG_OUT_USER='LOG_OUT_USER'

export function setLoggedInUser(id){
    return{
        type:SET_LOGGED_IN_USER,
        id,
    }
}

export function logOutUser(){
    return{
        type:LOG_OUT_USER
    }
}