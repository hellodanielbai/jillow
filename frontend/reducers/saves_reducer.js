import { RECEIVE_ALL_SAVES, RECEIVE_SAVE, REMOVE_SAVE } from "../actions/saves_actions";

const savesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    let nextState = Object.assign({}, oldState);

    switch (action.type) {
        case RECEIVE_ALL_SAVES:
            return action.saves;
        case RECEIVE_SAVE:
            nextState[action.save.id] = action.save;
            return nextState;
        case REMOVE_SAVE:
            delete nextState[action.saveId];
            return nextState;
        default:
            return oldState;
    }
};

export default savesReducer;