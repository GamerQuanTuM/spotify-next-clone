"use client"
import { useState, useEffect } from 'react'
import Header from '../../components/Header'

export default function Home() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            console.log('scrolling...', window.scrollY);
            if (window.scrollY > 70) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className='text-white flex flex-col h-screen scrollbar'>
            <div className={`fixed top-0 w-full h-16 ${isScrolled ? 'bg-red-200' : 'bg-transparent'}`}>
                <Header />
            </div>

            <div className='flex-1 bg-[#1f1e1e] scrollbar'>
                {/* Page Content */}
                <div className='mt-16 mx-8 mb-32'>
                    <p>Content</p>
                </div>
            </div>
        </div>
    )
}
