import Image from 'next/image';
import React from 'react';

function Main() {
    const images = [
        { src: '/bread-drink.jpg', alt: 'Holy Communion Image', text: '주의 만찬' },
        { src: '/bible.jpg', alt: 'Gospel Image', text: '복음' },
        { src: '/bible2.jpg', alt: 'Bible Category Image', text: '주제별 말씀' }
    ];

    return (
        <div className='flex justify-center gap-5 mt-20'>
            {images.map((image, index) => (
                <div
                    key={index}
                    className="relative w-[400px] h-[300px] overflow-hidden rounded-md"
                >
                    {/* 이미지 */}
                    <Image
                        src={image.src}
                        alt={image.alt}
                        layout="fill"
                        objectFit="cover"
                        className="brightness-50 transition-transform duration-500 ease-in-out hover:scale-105"
                    />

                    {/* 텍스트 오버레이 */}
                    <div className="absolute inset-0 flex items-center justify-center bg-opacity-30 text-white text-xl font-bold pointer-events-none">
                        {image.text}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Main