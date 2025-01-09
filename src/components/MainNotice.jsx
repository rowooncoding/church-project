'use client'

import React, { useState } from 'react';

function MainNotice () {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // 페이지 당 게시글 수 제한

    // 총 페이지 수 계산
    const totalPages = Math.ceil(notices.length / itemsPerPage);

    // 현재 페이지의 데이터 정렬
    const currentNotices = notices.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // 각 페이지 당 숫자
    const pageNumbers = Array.from({length : totalPages}, (_, index) => index + 1)

    return (
        <div className="relative w-full max-w-[800px] px-4 py-6">
            {/* 좌측 상단 "공지사항" 텍스트 */}
            <h1 className="absolute top-4 left-4 text-2xl font-bold text-[#6B6B6B]">
                공지사항
            </h1>
        
            {/* 우측 상단 "더보기" 버튼 */}
            <button className="absolute top-4 right-4 bg-[#6B6B6B] text-white px-3 py-1 rounded hover:bg-[#4A4A4A]">
                더보기
            </button>
        
            {/* 게시판 */}
            <div className="mt-10">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2 text-left">제목</th>
                            <th className="px-4 py-2 text-left">작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentNotices.map((notice) => (
                        <tr key={notice.id} className="hover:bg-gray-100 cursor-pointer">
                            <td className="px-4 py-1 border-b border-gray-300">{notice.title}</td>
                            <td className="px-4 py-1 border-b border-gray-300">{notice.date}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>

                {/* 페이징 버튼 */}
                <div className="flex justify-center items-center mt-4 gap-2">
                    <button
                        onClick={() => setCurrentPage(1)}
                        disabled={currentPage === 1}
                        >
                        맨 처음으로...
                    </button>

                    {/* 이전 버튼 */}
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded ${
                        currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-800"
                        }`}
                    >
                        이전
                    </button>

                    {pageNumbers.map((page) => (
                    <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-4 py-2 rounded ${
                        page === currentPage
                            ? "text-gray-800"
                            : "text-gray-400"
                        }`}
                    >
                        {page}
                    </button>
                    ))}

                    {/* 다음 버튼 */}
                    <button
                        onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                        }
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded ${
                        currentPage === totalPages
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-gray-800"
                        }`}
                    >
                        다음
                    </button>

                    {/* 맨 끝으로 버튼 */}
                    <button
                        onClick={() => setCurrentPage(totalPages)}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded ${
                        currentPage === totalPages
                            ? "text-gray-400 cursor-not-allowed"
                            : "text-gray-800"
                        }`}
                    >
                        ...맨 끝으로
                    </button>
                </div>
            </div>
        </div>
    );
};

// 더미데이터로 데이터베이스 연결되면 바로 변경할 것
const notices = [
    { id: 1, title: '2024년 겨울수련회 안내', date: '2024.11.19' },
    { id: 2, title: '2024년 겨울수련회 공지', date: '2024.11.19' },
    { id: 3, title: '2024년 여름수련회 - 초대장 !', date: '2024.07.21' },
    { id: 4, title: '2024년 여름수련회 수정 공지 !', date: '2024.07.17' },
    { id: 5, title: '2024년 여름수련회 안내', date: '2024.06.13' },
    { id: 6, title: '2023년 여름수련회 안내', date: '2023.06.13' },
    { id: 7, title: '2023년 겨울수련회 안내', date: '2023.11.19' },
    { id: 8, title: '2023년 겨울수련회 공지', date: '2023.11.19' },
    { id: 9, title: '2023년 여름수련회 - 초대장 !', date: '2023.07.21' },
    { id: 10, title: '2022년 여름수련회 수정 공지 !', date: '2022.07.17' },
    { id: 11, title: '2022년 여름수련회 안내', date: '2022.06.13' },
    { id: 12, title: '2022년 여름수련회 안내', date: '2022.06.13' },
];

export default MainNotice;