"use client"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react";
import Header from "../../../../components/Header";
import usePlaylistStore from "../../../../zustand/store";


export default function IndividualPlaylist() {
    const pathname = usePathname();
    const path = pathname?.split("/").slice(-1)[0] ?? "";

    const fetchPlaylistById = usePlaylistStore((state) => state.fetchPlaylistById)

    const playlist = usePlaylistStore((state) => state?.singlePlaylist)

    useEffect(() => {
        fetchPlaylistById(path);
    }, []);

    const [isScrolled, setIsScrolled] = useState(false)


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

        <div className='bg-[#1f1e1e] h-screen text-white'>
            <div className={`fixed top-0 w-full h-16 z-10 ${isScrolled ? 'bg-red-500' : 'bg-transparent'}`}>
                <Header />
            </div>
            <div className="h-full relative z-[0]">
                <img src={playlist?.image} alt="Banner-Playlist" className="w-full h-full z-[0] opacity-20"
                />
                <p className="text-9xl z-1 text-white font-bold drop-shadow-2xl absolute top-[120px] left-8">{playlist?.title}</p>
            </div>
        </div>
    )
}
