import {LOADING, ERROR, SUCCESS} from '../UsersConstants';

const initialState = {
  users: [],
  meta: {},
  isLoading: false,
  isError: false,
  isSuccess: false
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
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
        users: action.users,
        meta: action.meta
      };
    default: return state
  }
}

export default UsersReducer;