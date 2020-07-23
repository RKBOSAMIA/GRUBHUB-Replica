import * as apiUtil from '../util/session';

export const RECIEVE_CURRENT_USER = 'RECIEVE_CURRENT_USER';

const receiveCurrentUser = user => ({
    type : RECIEVE_CURRENT_USER,
    payload : user
});

export const SignIn = user => async dispatch => {
    const response = await apiUtil.SignIn(user);
    //alert(response.data.user.name);
    return dispatch(receiveCurrentUser(response.data.user));
    /*const data = await response.json();
    if (response.ok) {
        return dispatch(receiveCurrentUser(data));
      }*/
};
