export const fetchAllListings = (data) => (
    $.ajax({
        method: 'GET',
        url: '/api/listings',
        data
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
