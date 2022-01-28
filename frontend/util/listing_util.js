export const fetchAllListings = (filter) => (
    $.ajax({
        method: 'GET',
        url: '/api/listings',
        filter
    })
);

export const fetchSavedListings = (userId) => (
    $.ajax({
        method: 'GET',
        url: '/api/listings',
        userId
    })
);

export const fetchListing = (listingId) => (
    $.ajax({
        method: 'GET',
        url: `api/listings/${listingId}`
    })
);


export const createListing = (data) => (
    $.ajax({
        method: 'POST',
        url: 'api/listings',
        data
    })
);
