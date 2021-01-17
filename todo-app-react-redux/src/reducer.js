import {combineReducers,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {ADD_TASK, DELETE_TASK, UPDATE_TASK, ADD_TODO, DELETE_TODO} from './constants';

const initialState = {
    taskList: [],
};

const toDoReducer = (state=initialState,action) => {
    switch(action.type){
        case ADD_TASK: {
            return state = { taskList : [...state.taskList,action.payload]};
        }
        case DELETE_TASK:
        case UPDATE_TASK: {
            return state = {taskList : [...action.payload]};
        }
        case ADD_TODO: {
            return state = { taskList : [...action.payload]};
        }
        case DELETE_TODO: {
            return state = { taskList : [...action.payload]};
        }
        default: 
        return state;
    }
},
reducers = combineReducers({tasks: toDoReducer},applyMiddleware(createLogger()));

export default reducers;
