"use client";

import HeaderNav from '@/components/HeaderNav';
import { useRouter } from 'next/navigation';
import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setConfirmPassword, setPassword } from '../redux/slices/passwordSlice';
import { setEmail } from '../redux/slices/emailSlices';

function SignUp() {
    const dispatch = useDispatch();
    const router = useRouter();
    const [form, setForm] = useState({ name: "", phone: "" });

    const password = useSelector((state) => state.password.password);
    const isPasswordValid = useSelector((state) => state.password.isValid);
    const showPasswordTooltip = useSelector((state) => state.password.showPasswordTooltip);
    const showConfirmPasswordTooltip = useSelector((state) => state.password.showConfirmPasswordTooltip);

    const email = useSelector((state) => state.email.email);
    const isEmailValid = useSelector((state) => state.email.isEmailValid);
    const showEmailTooltip = useSelector((state) => state.email.showEmailTooltip);

    // 취소버튼 핸들러
    const backHandler = () => {
        router.push("/");
    };

    // 비밀번호 유효성 검사
    const handlerPasswordChange = (e) => {
        dispatch(setPassword(e.target.value));
    };

    // 비밀번호 확인
    const handlerConfirmPassword = (e) => {
        dispatch(setConfirmPassword(e.target.value));
    };

    // 이메일 확인
    const handlerEmailChange = (e) => {
        dispatch(setEmail(e.target.value));
    };

    // Redux 액션 디스패치 핸들러
    const handleChangeRedux = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "email":
                dispatch(setEmail(value));
                break;
            case "password":
                dispatch(setPassword(value));
                break;
            default:
                break;
        }
    };

        // 이름과 전화번호 입력 핸들러
        const handleChange = (e) => {
            const { name, value } = e.target;
            setForm({ ...form, [name]: value }); // name 속성에 따라 form 상태 업데이트
        };

    // 회원가입 insert
    const handleSubmit = async (e) => {
        e.preventDefault();

        // 서버로 보낼 데이터 생성
        const formData = {
            name: form.name,
            email,
            password,
            phone: form.phone,
        };

        const response = await fetch("/api/auth/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })

        if (response.ok) {
            alert("회원가입이 완료되었습니다.");
            router.push("/signin");
        } else {
            const errorData = await response.json();
            alert(errorData.error || "회원가입 실패");
        }
    };

    return (
        <>
            <HeaderNav />
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-4 my-40 text-[#4A4A4A]">
                <h1 className="font-extrabold text-2xl">회원가입</h1>
                <div className="flex flex-col w-1/3 gap-5">
                <div className="border border-gray-600 opacity-20 my-6"></div>

                    {/* 이메일 */}
                    <div className=" relative flex justify-between items-center">
                        <label className="flex items-center">
                            이메일
                            <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={handleChangeRedux}
                            placeholder="이메일 형식에 맞춰서 입력해주세요"
                            className={`p-2 w-2/3 border focus:outline-none ${
                                isEmailValid
                                    ? "border-gray-400 focus:border-gray-500"
                                    : "border-red-500 focus:border-red-500"
                            }`}
                            required
                        />
                        {/* 툴팁 */}
                        {showEmailTooltip && (
                            <div className="absolute z-40 top-full right-0 sm:right-0 mt-2 w-2/3 bg-red-950 text-white text-sm p-2 rounded shadow-lg">
                                이메일 형식을 지켜주세요.
                            </div>
                        )}
                    </div>

                    {/* 비밀번호 */}
                    <div className="relative flex justify-between items-center">
                        <label className="flex items-center">
                            비밀번호
                            <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            name="password"
                            onChange={handleChangeRedux}
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
                    <div className="relative flex justify-between items-center">
                        <label className="flex items-center">
                            비밀번호 확인
                            <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                            type="password"
                            name="password"
                            onChange={handlerConfirmPassword}
                            className="p-2 w-2/3 border border-gray-400 focus:outline-none focus:border-gray-500"
                            required
                        />
                        {/* 툴팁 */}
                        {showConfirmPasswordTooltip && (
                            <div className="absolute z-40 top-full right-0 sm:right-0 mt-2 w-2/3 bg-red-950 text-white text-sm p-2 rounded shadow-lg">
                                비밀번호가 동일하지 않습니다.
                            </div>
                        )}
                    </div>

                    {/* 이름 */}
                    <div className="flex justify-between items-center">
                        <label className="flex items-center">
                            이름
                            <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
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
                            value={form.phone}
                            onChange={handleChange}
                            className="p-2 w-2/3 border border-gray-400 focus:outline-none focus:border-gray-500"
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