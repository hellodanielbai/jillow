export const fetchAllSaves = () => (
    $.ajax({
        method: "GET",
        url: `api/saves`,
    })
);

export const createSave = (save) => (
    $.ajax({
        method: "POST",
        url: `api/saves`,
        data: {save: save}
    })
);

export const deleteSave = (saveId) => {
    $.ajax({
        method: "DELETE",
        url: `api/saves/${saveId}`
    })
};