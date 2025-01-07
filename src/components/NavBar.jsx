import React from 'react';
import Link from 'next/link';

function NavBar() {
    return (
        <nav className="p-4">
            <ul className="flex justify-center space-x-20">
                <li className='relative group'>
                    <Link href="/" className="text-gray-800">
                        교회소개
                    </Link>
                    <span className="absolute bottom-[-20px] left-0 w-0 h-[2px] bg-[#595959] transition-all duration-700 group-hover:w-full"></span>
                </li>
                <li className='relative group'>
                    <Link href="/worship" className="text-gray-800">
                        말씀과 예배
                    </Link>
                    <span className="absolute bottom-[-20px] left-0 w-0 h-[2px] bg-[#595959] transition-all duration-700 group-hover:w-full"></span>
                </li>
                <li className='relative group'>
                    <Link href="/growth" className="text-gray-800">
                        영적성장
                    </Link>
                    <span className="absolute bottom-[-20px] left-0 w-0 h-[2px] bg-[#595959] transition-all duration-700 group-hover:w-full"></span>
                </li>
                <li className='relative group'>
                    <Link href="/community" className="text-gray-800">
                        커뮤니티
                    </Link>
                    <span className="absolute bottom-[-20px] left-0 w-0 h-[2px] bg-[#595959] transition-all duration-700 group-hover:w-full"></span>
                </li>
                <li className='relative group'>
                    <Link href="/notices" className="text-gray-800">
                        공지사항
                    </Link>
                    <span className="absolute bottom-[-20px] left-0 w-0 h-[2px] bg-[#595959] transition-all duration-700 group-hover:w-full"></span>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;