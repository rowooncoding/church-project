import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: "",
    isValid: true,
    showTooltip: false,
};

const usernameSlice = createSlice({
    name: "username",
    initialState,
    reducers: {
        setUsername: (state, action) => {
            const value = action.payload;
            const isValid = /^[a-zA-Z]*$/.test(value); // 영문자만 유효

            state.value = value;
            state.isValid = isValid
            state.showTooltip = !isValid // valid가 false라면 툴팁은 true 반환
        },
    },
});

export const { setUsername } = usernameSlice.actions;
export default usernameSlice.reducer;