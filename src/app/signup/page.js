'use client'

import HeaderNav from '@/components/HeaderNav';
import { useRouter } from 'next/navigation';
import { React, useState } from 'react';

/**
 * [변경사항]
 * 비밀번호 유효성 검사
 * 비밀번호 확인 작업
 */

function SignUp() {
    const router = useRouter();
    const [showTooltip, setShowTooltip] = useState(false);

    // 취소버튼 핸들러
    const backHandler = () => {
        router.push("/")
    }

    // 툴팁 핸들러
    const handleFocus = () => {
        setShowTooltip(true);
    }

    const handlerBlur = () => {
        setShowTooltip(false);
    }

    return (
        <>
            <HeaderNav />
            <form className="flex flex-col justify-center items-center gap-4 my-40 text-[#4A4A4A]">
                <h1 className="font-extrabold text-2xl">회원가입</h1>
                <div className="flex flex-col w-1/3 gap-5">
                <div className="border border-gray-600 opacity-20 my-6"></div>
                    {/* 아이디 */}
                    <div className="flex justify-between items-center">
                        <label>아이디</label>
                        <input
                            type="text"
                            name="username"
                            className="p-2 w-2/3 border border-gray-400 focus:outline-none focus:border-gray-500"
                            required
                        />
                    </div>

                    {/* 비밀번호 */}
                    <div className="relative flex justify-between items-center">
                        <label>비밀번호</label>
                        <input
                            type="password"
                            name="password"
                            onFocus={handleFocus}
                            onBlur={handlerBlur}
                            className="p-2 w-2/3 border border-gray-400 focus:outline-none focus:border-gray-500"
                            required
                        />
                        {showTooltip && (
                            <div className="absolute top-12 right-0 sm:right-0 bg-gray-800 text-white text-sm p-2 rounded shadow-lg w-2/3">
                                영문, 특수문자, 숫자 포함 8~16자를 입력하세요.
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