import React from 'react';
import { Link } from 'react-router-dom'

class DropDown extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='dropdown-container'>
                <Link className="dropdown-item" to="/listings/saves">Saved Houses</Link>
                <Link className="dropdown-item" to="/listings/saves">Saved Search</Link>
                <Link className="dropdown-item" to="/listings/saves">Your Home</Link>
                <hr className="dropdown-line"></hr>
                <Link className="dropdown-item" to="/" onClick={() => this.props.logout()}>Sign Out</Link>
            </div>
        )
    }
}


export default DropDown