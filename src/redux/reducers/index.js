import { combineReducers } from "redux";
import courses from './courseReducers';

const rootReducer = combineReducers({
    // courses was referenced from courseReducer and below since both values are the same name you can remove one
    courses: courses
})

export default rootReducer;