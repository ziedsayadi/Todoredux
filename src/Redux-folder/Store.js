import inputReducer from './Reducers/Input' ;
import toDoReducer from './Reducers/todolist' ;
import removeReducer from './Reducers/index' ;
import isCompletReducer from './Reducers/Btn' ;
import {combineReducers} from 'redux' ;

const allReducers=combineReducers({
    userText:inputReducer ,
    toDoList :toDoReducer ,
    delet : removeReducer,
    Complet : isCompletReducer
}) ;

export default allReducers