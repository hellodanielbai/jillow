import React from 'react';
import {AiOutlineHeart} from "react-icons/ai"

class ListingLike extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user_id: this.props.user,
            listing_id: this.props.listing.id
        }
        this.update = this.update.bind(this)
    }

    update(e) {
        e.preventDefault()
        this.props.createSave(this.state)
    }

    render() {
        console.log(this.props)
        return (
            <div className="listing-like">
                <label>
                    <input type="radio" onClick={this.update} />
                    <AiOutlineHeart/> 
                </label>
            </div>
        )
    }
}

export default ListingLike