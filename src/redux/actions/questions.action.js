import { ADD_QUESTIONS } from '../types/questions.types';
import _ from 'lodash'

export const addQuestions = (newQuestions) => {
    const newUniversalQuestions = _.filter(newQuestions, (question) => question.isUniversal)
    const newIndividualQuestions = _.filter(newQuestions, (question) => !question.isUniversal)
    const payload = {
        newUniversalQuestions,
        newIndividualQuestions,
    }
    return {
        type: ADD_QUESTIONS,
        payload,
    };
};
