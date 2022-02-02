import { RECEIVE_CURRENT_USER } from '../actions/session_actions'
import { RECEIVE_LISTING } from '../actions/listings_actions'

const usersReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.id]: action.currentUser })
        // case RECEIVE_SAVE:
        //     return Object.assign({}, state, { [action.lister.id]: action.lister });
        // case RECEIVE_LISTING:
        //     return Object.assign({}, state, action.listers);
        default:
            return state;
    }
}

export default usersReducer