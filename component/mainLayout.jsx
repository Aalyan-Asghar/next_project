"use client"

import { usePathname } from 'next/navigation'
import Navbar from './Navbar';

export default function MainLayout() {
    const pathname = usePathname()
    const noLayoutPath = pathname !== '/login' && pathname !== '/signup';

    let content;

    if (noLayoutPath) {
        content = <Navbar />;
    }

    return (
        <>
            {content}
        </>
    );
}