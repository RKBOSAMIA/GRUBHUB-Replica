import { RECIEVE_CURRENT_USER } from '../../actions/session';
import { CLEAR_ERRORS,RECEIVE_ERRORS } from '../../actions/error';

export default (state = "", action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_ERRORS:
          {
            alert(action.payload);
            return action.payload;
          }
      case RECIEVE_CURRENT_USER:
      case CLEAR_ERRORS:
        return "";
      default:
        return state;
    }
  };