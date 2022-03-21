import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import listingsReducer from './listings_reducer';
import savesReducer from './saves_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    listings: listingsReducer,
    saves: savesReducer
});

export default entitiesReducer;