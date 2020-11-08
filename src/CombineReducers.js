import {combineReducers} from 'redux';

// Reducers
import UsersReducer from './Lobs/Users/Redux/UsersReducer';
import PostsReducer from './Lobs/Posts/Redux/PostsReducer';

export default combineReducers({
  Users: UsersReducer,
  Posts: PostsReducer
});