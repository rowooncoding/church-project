"use client";

import React from 'react';
import YouTube from 'react-youtube';

/**
 * 가능하면 나중에 데이터베이스에서 파라미터를 작성하면 그걸 가져와서 담아주는 형식으로 가야댐
 * => 그래서 비디오를 객체로 따로 만들지 않고 하드코딩함 (나중에 vidoe.key 로 변경해서 동적 값 받아올 것)
 */
function RecentLecture () {
    return (
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
    );
};

export default RecentLecture;