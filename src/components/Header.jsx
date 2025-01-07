import React from 'react';
import Image from 'next/image';

function Header() {
    return (
        <div className='flex items-start justify-center h-screen'>
            <Image 
                src="/selfmade-ahabalogo.png"
                    alt="Not fount Image"
                width={1200}
                height={400}
            />
        </div>
            
    )
}

export default Header;