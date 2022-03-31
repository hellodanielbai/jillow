import React from 'react';
import {AiOutlineHeart} from "react-icons/ai"

import { connect } from 'react-redux';
import { fetchAllListings } from '../../actions/listings_actions';
import { openModal } from '../../actions/modal_actions';
import { createSave, deleteSave, fetchAllSaves } from '../../actions/saves_actions'

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
        let likes = this.props.saves.filter(save => save.user_id === this.props.currentUser.id);
        let likeImage;
        likes.map(like => {
            if(this.props.listing.includes(like.listing_id)){
                likeImage = (<div> <AiOutlineHeart className="likedImage"/> </div>)
            } else {
                likeImage = (<div> <AiOutlineHeart className="unlikedImage"/> </div>)
            }
        })

        return (
            <div className="listing-like">
                <label>
                    <div onClick={this.update} >
                        <AiOutlineHeart className="unlikedImage"/>
                    </div>
                </label>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => {
    return {
        listings: Object.values(state.entities.listings),
        user: state.session.id,
        currentUser: state.entities.users[state.session.id],
        saves: Object.values(state.entities.saves)
    };
};

const mDTP = dispatch => ({
    fetchAllListings: () => dispatch(fetchAllListings()),
    fetchAllSaves: () => dispatch(fetchAllSaves()),
    openModal: (type) => dispatch(openModal(type)),
    createSave: (user, listing) => dispatch(createSave(user, listing)),
    deleteSave: (user, listing) => dispatch(deleteSave(user, listing))
});

export default connect(mSTP, mDTP)(ListingLike)