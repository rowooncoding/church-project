"use client";

import HeaderNav from '@/components/HeaderNav';
import { useRouter } from 'next/navigation';
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsername } from '../redux/slices/usernameSlice';
import { usePatchesInScope } from '../../../node_modules/immer/src/core/scope';
import { setConfirmPassword, setPassword, setValidatePassword} from '../redux/slices/passwordSlice';

/**
 * [변경사항]
 * 각 input 유효성 검사
 * 비밀번호 확인 작업
 */

function SignUp() {
    const dispatch = useDispatch();
    const router = useRouter();

    const username = useSelector((state) => state.username.value);
    const isValid = useSelector((state) => state.username.isValid);
    const showIdTooltip = useSelector((state) => state.username.showTooltip);

    const password = useSelector((state) => state.password.password);
    const isPasswordValid = useSelector((state) => state.password.isValid);
    const showPasswordTooltip = useSelector((state) => state.password.showPasswordTooltip);

    const [typingTimeout, setTypingTimeout] = useState(null);

    // 취소버튼 핸들러
    const backHandler = () => {
        router.push("/");
    };

    // 아이디 유효성 검사
    const handlerUsernameChange = (e) => {
        dispatch(setUsername(e.target.value));
    }

    // 비밀번호 유효성 검사
    const handlerPasswordChange = (e) => {
        const value = e.target.value;

        dispatch(setPassword(e.target.value));

        if (typingTimeout) {
            clearTimeout(typingTimeout);
        }

        const timeout = setTimeout(() => {
            dispatch(setValidatePassword());
        }, 1000);

        setTypingTimeout(timeout);
    };

    return (
        <>
            <HeaderNav />
            <form className="flex flex-col justify-center items-center gap-4 my-40 text-[#4A4A4A]">
                <h1 className="font-extrabold text-2xl">회원가입</h1>
                <div className="flex flex-col w-1/3 gap-5">
                <div className="border border-gray-600 opacity-20 my-6"></div>
                    {/* 아이디 */}
                    <div className="relative flex justify-between items-center">
                        <label>아이디</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            placeholder="영문자만 입력 가능합니다."
                            onChange={handlerUsernameChange}
                            className={`p-2 w-2/3 border focus:outline-none ${
                                isValid
                                    ? "border-gray-400 focus:border-gray-500"
                                    : "border-red-500 focus:border-red-500"
                            }`}
                            required
                        />
                        {/* 툴팁 */}
                        {showIdTooltip && (
                            <div className="absolute z-40 top-full right-0 sm:right-0 mt-2 w-2/3 bg-red-950 text-white text-sm p-2 rounded shadow-lg">
                                영문 아이디만 입력 가능합니다.
                            </div>
                        )}
                    </div>

                    {/* 비밀번호 */}
                    <div className="relative flex justify-between items-center">
                        <label>비밀번호</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            name="password"
                            placeholder="비밀번호 입력"
                            onChange={handlerPasswordChange}
                            className={`p-2 w-2/3 border focus:outline-none ${
                                isPasswordValid
                                    ? "border-gray-400 focus:border-gray-500"
                                    : "border-red-500 focus:border-red-500"
                            }`}
                            required
                        />
                        {/* 툴팁 */}
                        {showPasswordTooltip && (
                            <div className="absolute z-40 top-full right-0 sm:right-0 mt-2 w-2/3 bg-red-950 text-white text-sm p-2 rounded shadow-lg">
                                비밀번호는 영문, 숫자, 특수문자를 포함하여 최소 8자 이상이어야 합니다.
                            </div>
                        )}
                    </div>

                    {/* 비밀번호 확인 */}
                    <div className="flex justify-between items-center">
                        <label>비밀번호 확인</label>
                        <input
                            type="password"
                            name="password"
                            className="p-2 w-2/3 border border-gray-400 focus:outline-none focus:border-gray-500"
                            required
                        />
                    </div>

                    {/* 이름 */}
                    <div className="flex justify-between items-center">
                        <label>이름</label>
                        <input
                            type="text"
                            name="name"
                            className="p-2 w-2/3 border border-gray-400 focus:outline-none focus:border-gray-500"
                            required
                        />
                    </div>

                    {/* 이메일 */}
                    <div className="flex justify-between items-center">
                        <label>이메일</label>
                        <input
                            type="email"
                            name="email"
                            className="p-2 w-2/3 border border-gray-400 focus:outline-none focus:border-gray-500"
                            required
                        />
                    </div>

                    {/* 연락처 */}
                    <div className="flex justify-between items-center">
                        <label>연락처</label>
                        <input
                            type="text"
                            name="phone"
                            className="p-2 w-2/3 border border-gray-400 focus:outline-none focus:border-gray-500"
                            required
                        />
                    </div>
                </div>

                {/* 버튼 */}
                <div className="flex gap-9 mt-9">
                    <button 
                        type="button"
                        className="px-4 py-2 bg-gray-500 text-white font-medium rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                        onClick={backHandler}
                    >취소하기</button>
                    <button 
                        type="submit"
                        className="px-4 py-2 bg-gray-500 text-white font-medium rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >가입하기</button>
                </div>
            </form>
        </>
    )
}

export default SignUp