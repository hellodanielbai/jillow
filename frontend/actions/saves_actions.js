import * as SaveAPIUtil from "../util/save_util";
import { receiveErrors } from "./session_actions";

export const RECEIVE_ALL_SAVES = "RECEIVE_ALL_SAVES";
export const RECEIVE_SAVE = "RECEIVE_SAVE";
export const DELETE_SAVE = "DELETE_SAVE";
export const RECEIVE_SAVE_ERRORS = "RECEIVE_SAVE_ERRORS";

//regular
export const receiveAllSaves = (saves) => ({
    type: RECEIVE_ALL_SAVES,
    saves
});

export const receiveSave = (save) => ({
    type: RECEIVE_SAVE,
    save
});

export const removeSave = (saveId) => ({
    type: DELETE_SAVE,
    saveId
});

export const receiveSaveErrors = (errors) => ({
    type: RECEIVE_SAVE_ERRORS,
    errors
});

//thunk
export const fetchAllSaves = () => (dispatch) => (
    SaveAPIUtil.fetchAllSaves().then(
        (saves) => dispatch(receiveAllSaves(saves)),
        (errors) => dispatch(receiveSaveErrors(errors.responseJSON))
    )
)

export const createSave = (save) => (dispatch) => {
    return (
        SaveAPIUtil.createSave(save).then(
            (save) => dispatch(receiveSave(save)),
            (errors) => dispatch(receiveSaveErrors(errors.responseJSON))
            )
    )
}

export const deleteSave = (saveId) => (dispatch) => {
    return (
        SaveAPIUtil.deleteSave(saveId).then(
            (saveId) => dispatch(removeSave(saveId)),
            (errors) => dispatch(receiveSaveErrors(errors.responseJSON))
            )
    )
}