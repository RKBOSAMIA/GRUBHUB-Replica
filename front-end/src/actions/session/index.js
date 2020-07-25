import * as apiUtil from '../../util/session';
import { receiveErrors } from '../error'

export const RECIEVE_CURRENT_USER = 'RECIEVE_CURRENT_USER';

const receiveCurrentUser = user => ({
    type : RECIEVE_CURRENT_USER,
    payload : user
});

export const SignIn = user => async dispatch => {
    const response = await apiUtil.SignIn(user);
    
    if (response.data.status === 'OK')
        return dispatch(receiveCurrentUser(response.data.user));
    else
    {
        //alert(response.data.message);
        return dispatch(receiveErrors(response.data.message));
    }        
};

export const SignUp = user => async dispatch => {
    const response = await apiUtil.SignUp(user);

    if (response.data.status === 'OK')
        return dispatch(receiveCurrentUser(response.data.user));
    else
        return dispatch(receiveErrors(response.data.message));
};