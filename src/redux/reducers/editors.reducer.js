import { ADD_EDITORS, SET_IS_EDITOR } from '../types/editors.types';
import _ from 'lodash'

const INITIAL_STATE = {
    editors: [],
    isEditor: false,
};
const editorsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_EDITORS:
            return {
                ...state, editors: _.concat(state.editors, action.payload)
            };
        case SET_IS_EDITOR:
            return {
                ...state, isEditor: action.payload
            };
        default: return state;
    }
};
export default editorsReducer;