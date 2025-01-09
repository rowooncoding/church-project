import Image from 'next/image';
import { React } from 'react';

function FooterBanner () {
    return (
        <div className="relative w-full h-[400px]">
            <Image
                src='/time-banner.png'
                alt='예배시간 이미지'
                layout='responsive'
                width={16}
                height={90}
            />    
        </div>
    )
};

export default FooterBanner;