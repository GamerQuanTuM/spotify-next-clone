"use client"
import Image from 'next/image';
import { useState, useEffect } from 'react'
import FeaturedPlaylist from '../../components/FeaturedPlaylist';
import Header from '../../components/Header'
import ScrollableCardPlaylist from '../../components/ScrollableCardPlaylist';
import usePlaylistStore from '../../zustand/store';


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

    const date = new Date();
    let hour = date.getHours();
    let greeting;
    if (hour >= 12 && hour < 16) {
        greeting = "Good Afternoon";
    } else if (hour >= 16 && hour < 21) {
        greeting = "Good Evening";
    } else if (hour >= 21 || hour < 5) {
        greeting = "Good Night";
    } else if (hour >= 5 && hour < 12) {
        greeting = "Good Morning";
    } else {
        greeting = "Hello User";
    }



    const playlists = usePlaylistStore((state) => state.playlists)



    const fetchPlaylist = usePlaylistStore((state) => state.fetchPlaylist)

    useEffect(() => {
        fetchPlaylist()
    }, [fetchPlaylist])



    return (
        <div className='text-white flex flex-col h-screen scrollbar'>
            <div className={`fixed top-0 w-full h-16 z-10 ${isScrolled ? 'bg-red-500' : 'bg-transparent'}`}>
                <Header />
            </div>

            <div className='flex-1 bg-[#1f1e1e] scrollbar z-0'>
                {/* Page Content */}
                <div className='mt-16 mx-8'>
                    <div className='mx-6'>
                        <Image src={require('../../public/crop.jpeg')} alt="" className='w-full max-h-96 object-top object-cover' />
                    </div>

                    <div className='mt-5'>
                        <span className='font-bold text-3xl'>{greeting}</span>
                    </div>

                    <div className='mt-12 flex flex-wrap gap-5 items-center justify-evenly relative'>
                        {playlists.slice(0, 6).map(({ artist, image, title, id }) => (
                            <FeaturedPlaylist key={id} artist={artist} image={image} title={title} id={id} />
                        ))}
                    </div>
                </div>

                {/* Card Playlist */}
                <div className='mb-32 mt-3'>
                    <div className='mt-8'>
                        <ScrollableCardPlaylist header="Jump back in" />
                    </div>
                    <div className='mt-8'>
                        <ScrollableCardPlaylist header="Made for Shuvam" />
                    </div>
                    <div className='mt-8'>
                        <ScrollableCardPlaylist header="Yours top mixes" />
                    </div>
                    <div className='mt-8'>
                        <ScrollableCardPlaylist header="Today's Biggest Hit" />
                    </div>
                    <div className='mt-8'>
                        <ScrollableCardPlaylist header="Charts" />
                    </div>
                    <div className='mt-8'>
                        <ScrollableCardPlaylist header="Uniquely yours" />
                    </div>
                    <div className='mt-8'>
                        <ScrollableCardPlaylist header="Recommendation for Today" />
                    </div>
                    <div className='mt-8'>
                        <ScrollableCardPlaylist header="Your Favourite Artist" />
                    </div>
                    <div className='mt-8'>
                        <ScrollableCardPlaylist header="Based on your recent listening" />
                    </div>
                </div>
            </div>
        </div>
    )
}

