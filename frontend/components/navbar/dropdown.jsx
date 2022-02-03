import React from 'react';
import { Link } from 'react-router-dom'

class DropDown extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Link to="/listings/saves">Saved Houses</Link>
                <Link to="/listings/saves">Saved Search</Link>
                <Link to="/listings/saves">Your Home</Link>
                <a onClick={() => this.props.logout()}>Sign out</a>
            </div>
        )
    }
}


export default DropDown