import {combineReducers} from 'redux';

// Reducers
import UsersLanding from './Lobs/Users/Redux/UsersReducer';


export default combineReducers({
  Users: UsersLanding
});