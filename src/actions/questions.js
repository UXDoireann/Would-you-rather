

export const RECEIVE_QUESTIONS='RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER='SAVE_QUESTION_ANSWER'
export const ADD_QUESTION ='ADD_QUESTION'

export function receiveQuestions(questions){
    return{
        type:RECEIVE_QUESTIONS,
        questions,
    }
}

export function saveAnswer(authedUser, qid, answer){
    return{
        type:SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
         answer
    }
}



export function addQuestion(question){
    return{
        type:ADD_QUESTION,
        question
    }
}


