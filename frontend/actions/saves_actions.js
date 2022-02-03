import * as SaveAPIUtil from "../util/save_util";
import { receiveErrors } from "./session_actions";

export const RECEIVE_SAVE = "RECEIVE_SAVE";
export const DELETE_SAVE = "DELETE_SAVE";

//regular
export const receiveSave = (save) => ({
    type: RECEIVE_SAVE,
    save
});

export const removeSave = (save) => ({
    type: DELETE_SAVE,
    save
});

//thunk
export const createSave = (user, listing) => (dispatch) => (
    SaveAPIUtil.createSave(user.id, listing.id).then(
        (save) => dispatch(receiveSave(save)),
        (error) => dispatch(dispatch(receiveErrors(error.responseJSON)))
    )
)

export const deleteSave = (save) => (dispatch) => (
    SaveAPIUtil.deleteSave(save.id).then(
        (save) => dispatch(removeSave(save)),
        (error) => dispatch(dispatch(receiveErrors(error.responseJSON)))
    )
)