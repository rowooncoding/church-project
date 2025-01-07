import React from 'react';
import Image from 'next/image';

function Header() {
    return (
        <div className='flex items-start justify-center mt-10'>
            <Image 
                src="/selfmade-ahabalogo2.png"
                alt="Not fount Image"
                width={700}
                height={10}
                layout="intrinsic"
            />
        </div>
    )
}

export default Header;