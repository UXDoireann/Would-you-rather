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
                    ...questions,
                    [action.qid]: {
                      ...questions[action.qid],
                      [action.answer]: {
                        ...questions[action.qid][action.answer],
                        votes: questions[action.qid][action.answer].votes.concat([action.authedUser])
                      }
                    }
                  }
            
            
            default:
                return state
    }
}