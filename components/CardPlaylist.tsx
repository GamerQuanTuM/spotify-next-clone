import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Playlist } from '../typings'

export default function CardPlaylist({ id, artist, image, title }: Playlist) {
    return (
        <div className='bg-[#4038384d] hover:bg-[#6358584d] rounded-md w-60 h-60 flex justify-center items-start'>
            <Link href={`/playlist/${id}`} className="flex flex-col items-center mx-1">
                <div className='mt-5 flex-1'>
                    <img src={image} alt="card-playlist" className='h-36 w-36 rounded-full' />
                </div>

                <div className='mt-5 mx-[4px]'>
                    <div className='text-center font-bold'>
                        {title.length > 20 ? title.slice(0, 19).toUpperCase() + "..." : title.toUpperCase()}
                    </div>
                </div>
            </Link>
        </div>
    )
}
