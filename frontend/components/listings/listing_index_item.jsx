import React from 'react';

const ListingIndexItem = (props) => {
    return (
        <li>
            {props.listing.picture}
            {props.listing.price}
            {props.listing.bd}
            {props.listing.ba}
            {props.listing.sqft}
            {props.listing.address}
            {props.listing.city}
            {props.listing.state}
            {props.listing.zipcode}
        </li>
    )
};

export default ListingIndexItem