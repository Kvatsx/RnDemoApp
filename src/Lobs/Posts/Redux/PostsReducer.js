import {LOADING, ERROR, SUCCESS} from '../PostsConstants';
 
const initialState = {
  posts: [],
  meta: {},
  isLoading: false,
  isError: false,
  isSuccess: false
};

const PostsReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOADING: 
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false
      };
    case ERROR: 
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        posts: action.posts,
        meta: action.meta
      };
    default: return state
  }
}

export default PostsReducer;
