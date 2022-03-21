export const fetchAllSaves = () => (
    $.ajax({
        method: "GET",
        url: `api/saves`,
    })
);

export const createSave = (saves) => (
    $.ajax({
        method: "POST",
        url: `api/saves`,
        data: {saves: saves}
    })
);

export const deleteSave = (saveId) => {
    $.ajax({
        method: "DELETE",
        url: `api/saves/${saveId}`
    })
};