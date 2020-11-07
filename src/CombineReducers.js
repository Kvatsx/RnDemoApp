import {combineReducers} from 'redux';

// Reducers
import UsersReducer from './Lobs/Users/Redux/UsersReducer';

export default combineReducers({
  Users: UsersReducer
});