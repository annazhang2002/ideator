import { combineReducers } from 'redux';
import editorsReducer from './reducers/editors.reducer';
import questionsReducer from './reducers/questions.reducer';

const rootReducer = combineReducers({
    editors: editorsReducer,
    questions: questionsReducer,
});
export default rootReducer;