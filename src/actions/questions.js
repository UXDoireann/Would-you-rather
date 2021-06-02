import {_getQuestions, _saveQuestion, _saveQuestionAnswer} from '../utils/_DATA.js'

export const RECEIVE_QUESTIONS='RECEIVE_QUESTIONS'

export function receiveQuestions(questions){
    return{
        type:RECEIVE_QUESTIONS,
        questions,
    }
}

export const SAVE_QUESTION ='RECEIVE_QUESTION'

export function saveQuestion(question){
    return{
        type:SAVE_QUESTION,
        question,
    }
}

export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function saveQuestionAnswer(answer){
    return{
        type:SAVE_QUESTION_ANSWER,
        answer,
    }
}