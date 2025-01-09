"use client";

import React from 'react';
import YouTube from 'react-youtube';

/**
 * 가능하면 나중에 데이터베이스에서 파라미터를 작성하면 그걸 가져와서 담아주는 형식으로 가야댐
 * => 그래서 비디오를 객체로 따로 만들지 않고 하드코딩함 (나중에 vidoe.key 로 변경해서 동적 값 받아올 것)
 */
function RecentLecture () {
    return (
        <div className='relative px-4 py-6'>
            {/* 좌측 상단 "공지사항" 텍스트 */}
            <h1 className="absolute top-4 left-4 text-2xl font-bold text-[#6B6B6B]">
                금주의 말씀
            </h1>
        
            {/* 우측 상단 "더보기" 버튼 */}
            <button className="absolute top-4 right-4 bg-[#6B6B6B] text-white px-3 py-1 rounded hover:bg-[#4A4A4A]">
                더보기
            </button>

            <div className='mt-10'>
                <YouTube 
                    videoId='wZPkClqUgIk'
                    opts={{
                        width: "670",
                        height: "400",
                        playerVars: {
                        autoplay: 0, //자동재생 O
                        },
                    }}
                />
            </div>
            
        </div>        
    );
};

export default RecentLecture;