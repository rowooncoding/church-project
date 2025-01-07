import React from 'react';
import Link from 'next/link';

function HeaderNav() {
    return (
        <div className="flex justify-end px-20 items-center space-x-4 mt-6 text-xs text-gray-500 font-medium">
            <Link href="/">Home</Link>
            <span>|</span>
            <Link href="/signin">Sign in</Link>
            <span>|</span>
            <Link href="/signup">Sign up</Link>
            <span>|</span>
            <Link href="/language">English</Link>
        </div>
    )
}

export default HeaderNav