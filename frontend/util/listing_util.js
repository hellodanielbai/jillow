export const fetchAllListings = () => (
    $.ajax({
        method: 'GET',
        url: '/api/listings'
    })
);

export const fetchListing = (listingId) => (
    $.ajax({
        method: 'GET',
        url: `api/listings/${listingId}`
    })
);

export const fetchSavedListings = (userId) => (
    $.ajax({
        method: 'GET',
        url: '/api/listings',
    })
);

export const createListing = (listing) => (
    $.ajax({
        method: 'POST',
        url: 'api/listings',
        data: { listing }
    })
);
