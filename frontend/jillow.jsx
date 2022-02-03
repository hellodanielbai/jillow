//React
import React from 'react';
import ReactDOM from 'react-dom';
import { logout } from './actions/session_actions'

//Components
import Root from './components/root';
import configureStore from './store/store'
import logoutCurrentUser from './actions/session_actions' 

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            session: { id: window.currentUser.id },
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore()
    }

    const root = document.getElementById('root')
    window.store = store
    window.getState = store.getState
    ReactDOM.render(<Root store={store} />, root)
});
