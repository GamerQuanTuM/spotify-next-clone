"use client"
import React, { SetStateAction } from 'react'
import {
    MagnifyingGlassIcon,
    HomeIcon,
    ListBulletIcon,
    PlusIcon,
    HeartIcon,
    BookmarkIcon
} from "@heroicons/react/24/solid"
import Link from 'next/link'
import PlayListCard from './PlayList'
import Image from 'next/image'
import { Playlist } from '../typings'
import usePlaylistStore from '../zustand/store'


export default function Header() {
    const playlist = usePlaylistStore((state)=>state.playlists)

    const [clicked, setClicked] = React.useState<Playlist | null>(null)
    const clickedPlaylist = (playlist: SetStateAction<null | Playlist>): void => {
        setClicked(playlist)
    }

    return (
        <div className='text-white fixed'>
            <div className='mt-8 mx-5 space-y-4 text-md'>
                <Link href={'/'} className='flex items-center cursor-pointer'>
                    <HomeIcon className='h-5 w-5 mx-2' />
                    <h3>Home</h3>
                </Link>
                <div className='flex items-center cursor-pointer'>
                    <MagnifyingGlassIcon className='h-5 w-5 mx-2' />
                    <h3>Search</h3>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <ListBulletIcon className='h-5 w-5 mx-2' />
                    <h3>Your Library</h3>
                </div>
            </div>

            <div className='mt-12 mx-5 space-y-4 text-md'>
                <div className='flex items-center cursor-pointer'>
                    <PlusIcon className='h-5 w-5 mx-2' />
                    <h3>Create Playlist</h3>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <HeartIcon className='h-5 w-5 mx-2' />
                    <h3>Liked Songs</h3>
                </div>
                <div className='flex items-center cursor-pointer'>
                    <BookmarkIcon className='h-5 w-5 mx-2' />
                    <h3>Your Episodes</h3>
                </div>
            </div>

            <hr className="border-b-[0.5px] border-gray-700/40 my-6 mx-5 w-[80%]" />

            <div>
                {playlist.slice(0, 3).map((item) => (
                    <div key={item.id}>
                        <Link href={`/playlist/${item.id}`}
                        >
                            <div className='ml-5 tracking-wider' onClick={() => clickedPlaylist(item)}>
                                <PlayListCard content={item} />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>


            <div>
                {clicked && (
                    <div className='mt-3 mx-3'>
                        <Image src={clicked?.img} alt='Image' height={10} width={200} />
                    </div>
                )}
            </div>

        </div>
    )
}
