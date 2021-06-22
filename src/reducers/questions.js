import {RECEIVE_QUESTIONS, SAVE_QUESTION_ANSWER } from '../actions/questions'

export default function questions(state={}, action){
    switch(action.type){
        case RECEIVE_QUESTIONS:
            return{
                ...state,
                ...action.questions
            }
            case SAVE_QUESTION_ANSWER:
                return{
                    ...state,
        [action.questionId] : {
          ...state[action.questionId],
          [action.answer]: {
            ...state[action.questionId][action.answer],
            votes: state[action.qid][action.answer].votes.concat(action.loggedInUser)
          }
        }

                }
            default:
                return state
    }
}