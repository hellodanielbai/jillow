export const createSave = (userId, listingId) => (
    $.ajax({
        method: "POST",
        url: `api/saves`,
        data: {
            user_id: userId,
            listing_id: listingId
        }
    })
);

export const deleteSave = (saveId) => {
    $.ajax({
        method: "DELETE",
        url: `api/saves/${saveId}`
    })
};