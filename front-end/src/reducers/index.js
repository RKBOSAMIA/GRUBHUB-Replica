import session from './session';
import error from './errors';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    session,
    error
});

export default allReducers;