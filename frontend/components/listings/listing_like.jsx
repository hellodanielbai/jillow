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

    componentDidMount() {
        this.props.fetchAllSaves()
    }

    update(like) {
        // e.preventDefault()
        if (like.length === 0) {
            this.props.createSave(this.state)
        } else {
            this.props.deleteSave(this.state)
        }
    }

    render() {
        let like = this.props.saves.filter(save => this.props.listing.id === save.listingId)
        console.log("like", like)
        let likeImage;
        // let likeImage = (<div> <AiOutlineHeart className="likedImage"/> </div>)
        // likes(like => {
        //     if (this.props.listing.includes(like.listingId)){
        //         likeImage = (<div> <AiOutlineHeart className="likedImage"/> </div>)
        //     } else {
        //         likeImage = (<div> <AiOutlineHeart className="unlikedImage"/> </div>)
        //     }
        // })

        if (like.length > 0) {
            likeImage = (<div> <AiOutlineHeart className="likedImage"/> </div>)
        } else {
            likeImage = (<div> <AiOutlineHeart className="unlikedImage"/> </div>)
        }

        return (
            <div className="listing-like">
                <label>
                    <div onClick={(like) => this.update(like)} >
                        { likeImage }
                        {/* <AiOutlineHeart className="likedImage"/> */}
                    </div>
                </label>
            </div>
        )
    }
}

const mSTP = (state, ownProps) => {
    let saves;
    saves = Object.values(state.entities.saves).filter(save => { return state.session.id === save.userId })
    return {
        listings: Object.values(state.entities.listings),
        user: state.session.id,
        currentUser: state.entities.users[state.session.id],
        // saves: Object.values(state.entities.saves)
        saves: saves
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