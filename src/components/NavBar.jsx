import React from 'react';
import Link from 'next/link';

function NavBar() {
    return (
        <nav className="p-4">
            <ul className="flex justify-center space-x-20">
                <li>
                    <Link href="/" className="text-gray-800 hover:text-blue-500">
                        교회소개
                    </Link>
                </li>
                <li>
                    <Link href="/worship" className="text-gray-800 hover:text-blue-500">
                        말씀과 예배
                    </Link>
                </li>
                <li>
                    <Link href="/growth" className="text-gray-800 hover:text-blue-500">
                        영적성장
                    </Link>
                </li>
                <li>
                    <Link href="/community" className="text-gray-800 hover:text-blue-500">
                        커뮤니티
                    </Link>
                </li>
                <li>
                    <Link href="/notices" className="text-gray-800 hover:text-blue-500">
                        공지사항
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;