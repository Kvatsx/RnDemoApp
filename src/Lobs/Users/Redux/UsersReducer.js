import {STATE_LOADING} from '../UsersConstants';

const initialState = {
  UsersDto: "Data"
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATE_LOADING: 
      return {
        ...state,
      }
    default: return state
  }
}

export default UsersReducer;