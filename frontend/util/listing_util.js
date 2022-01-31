export const fetchAllListings = () => (
    $.ajax({
        method: 'GET',
        url: '/api/listings'
    })
);

export const fetchSavedListings = (userId) => (
    $.ajax({
        method: 'GET',
        url: '/api/listings',
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
