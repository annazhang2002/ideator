import { ADD_EDITORS, SET_IS_EDITOR } from '../types/editors.types';

export const addEditors = (newEditors) => {
    return {
        type: ADD_EDITORS,
        payload: newEditors,
    };
};

export const setIsEditor = (isEditor) => {
    return {
        type: SET_IS_EDITOR,
        payload: isEditor,
    };
};
