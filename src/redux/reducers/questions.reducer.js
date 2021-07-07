import { ADD_QUESTIONS } from '../types/questions.types';
import _ from 'lodash'

const INITIAL_STATE = {
    universalQuestions: [],
    individualQuestions: [],
};
const questionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_QUESTIONS:
            return {
                ...state,
                universalQuestions: _.concat(state.universalQuestions, action.payload.newUniversalQuestions),
                individualQuestions: _.concat(state.individualQuestions, action.payload.newIndividualQuestions)
            };
        default: return state;
    }
};
export default questionsReducer;