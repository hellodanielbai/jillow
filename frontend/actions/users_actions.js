import * as UserAPIUtil from '../util/user_api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users: users
});

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user: user
});

export const fetchAllUsers = () => (dispatch) => (
    UserAPIUtil.fetchAllUsers()
        .then(users => dispatch(receiveAllUsers(users)))
)

export const fetchUser = (userId) => (dispatch) => (
    UserAPIUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
)