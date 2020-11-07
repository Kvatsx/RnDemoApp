import { act } from 'react-test-renderer';
import {UsersActionTypes} from '../UsersConstants';

const initialState = {
  UsersDataObject: {}
};

const UsersLanding = (state = initialState, action) => {
  const UserActionState = {
    [UsersActionTypes.STATE_LOADING]: {...state}
  };

  return state; //action.type in UserActionState ? UserActionState[action.type] : 
}

export default UsersLanding;