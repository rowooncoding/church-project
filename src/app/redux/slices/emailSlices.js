import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: "",
    isEmailValid: true,
    showEmailTooltip: false,
}

const emailSlice = createSlice({
    name: "email",
    initialState,
    reducers: {
        setEmail: (state, action)=> {
            state.email = action.payload;
            const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(state.email);
            
            state.isEmailValid = isEmailValid;
            state.showEmailTooltip = !isEmailValid
        }
    }
});

export const { setEmail } = emailSlice.actions
export default emailSlice.reducer