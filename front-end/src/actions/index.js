import * as apiUtil from '../util/session';

export const RECIEVE_CURRENT_USER = 'RECIEVE_CURRENT_USER';
export const RECIEVE_PROFILE = 'RECIEVE_PROFILE';
const receiveCurrentUser = user => ({
    type : RECIEVE_CURRENT_USER,
    payload : user
});

export const SignIn = user => async dispatch => {
    const response = await apiUtil.SignIn(user);
    return dispatch(receiveCurrentUser(response.data.user));
};