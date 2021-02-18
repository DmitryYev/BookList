import C from "../constants";

export const selectCatAction = value => ({
    type: C.SELECT_CATEGORY,
    payload: value
})