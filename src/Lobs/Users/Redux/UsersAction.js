import {LOADING, ERROR, SUCCESS} from '../UsersConstants';
import {BASE_URL} from '../../LobsConstants';
import {getBaseHeaders, DEFAULT_TIMEOUT} from '../../LobsNetworkUtils';

export const fetchUsers = () => async (dispatch) => {
  try{
    dispatch(isLoading());
    const url = `${BASE_URL}/users`;
    const baseHeaders = getBaseHeaders();
    const response = await fetch(url, {
      method: 'GET',
      headers: baseHeaders
    });
    if (!response && !response.ok) {
      dispatch(isError());
      return;
    }
    const responseBody = await response.json();
    if (responseBody.code !== 200 || !responseBody.data || !responseBody.meta) {
      dispatch(isError());
      return;
    }
    dispatch(isSuccess(responseBody));
    return;
  }
  catch {
    dispatch(isError());
    return;
  }
};

const isLoading = () => ({
  type: LOADING
})

const isError = () => ({
  type: ERROR
})

const isSuccess = (responseBody) => ({
  type: SUCCESS,
  users: responseBody.data,
  meta: responseBody.meta
})