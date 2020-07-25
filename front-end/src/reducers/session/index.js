import { RECIEVE_CURRENT_USER } from '../../actions/session';

const _nullSession = { _id:null,name:null}
export default (state = _nullSession, action) =>{
    Object.freeze(state);
    switch (action.type){
        case RECIEVE_CURRENT_USER:
            return action.payload;
        default:
            return state;
    }
};