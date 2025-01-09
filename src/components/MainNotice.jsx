import React from 'react';

function MainNotice () {
    // 더미데이터로 데이터베이스 연결되면 바로 변경할 것
    const notices = [
        { id: 1, title: '2024년 겨울수련회 안내', date: '2024.11.19' },
        { id: 2, title: '2024년 겨울수련회 공지', date: '2024.11.19' },
        { id: 3, title: '2024년 여름수련회 - 초대장 !', date: '2024.07.21' },
        { id: 4, title: '2024년 여름수련회 수정 공지 !', date: '2024.07.17' },
        { id: 5, title: '2024년 여름수련회 안내', date: '2024.06.13' },
        { id: 6, title: '2024년 여름수련회 안내', date: '2024.06.13' },
    ];
    
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
                        {notices.map((notice) => (
                        <tr key={notice.id} className="hover:bg-gray-100 cursor-pointer">
                            <td className="px-4 py-1 border-b border-gray-300">{notice.title}</td>
                            <td className="px-4 py-1 border-b border-gray-300">{notice.date}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MainNotice;