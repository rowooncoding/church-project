import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    password: "", // 입력된 비밀번호
    confirmPassword: "", // 입력된 비밀번호 확인용
    isValid: true, // 유효성 검사 결과
    showPasswordTooltip: false,
    showConfirmPasswordTooltip: false,
};

const passwordSlice = createSlice({
    name: "password",
    initialState,
    reducers: {
        // 입력값 업데이트
        setPassword: (state, action) => {
            state.password = action.payload;
            const isValidPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(state.password);
            state.isValid = isValidPassword;
            state.showPasswordTooltip = !isValidPassword;
        },
        setConfirmPassword: (state, action) => {
            const value = action.payload;
            state.confirmPassword = value;
            
            // 비밀번호 확인검사
            const isMatch = value === state.password
            state.confirmErrorMessage = isMatch ? "" : "비밀번호가 일치하지 않습니다.";
            state.showConfirmPasswordTooltip = !isMatch;
        },
    },
});

export const { setPassword, setValidatePassword, setConfirmPassword } = passwordSlice.actions;
export default passwordSlice.reducer;