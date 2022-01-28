export const OPEN_MODAL = 'OPEN_MODAL'
export const CLOSE_MODAL = 'CLOSE_MODAL'

export const openModal = (modalState) => ({
    type: OPEN_MODAL,
    modalState
})

export const closeModal = () => ({
    type: CLOSE_MODAL
})