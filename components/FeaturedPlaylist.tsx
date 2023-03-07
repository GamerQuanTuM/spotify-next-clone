"use client"
import React, { useState } from 'react'
import { Playlist } from '../typings'
import { AiFillPauseCircle as PauseIcon, AiFillPlayCircle as PlayIcon } from "react-icons/ai"
import Link from 'next/link'

export default function FeaturedPlaylist({ image, title, id }: Playlist) {


    const [showIcon, setShowIcon] = useState(false)
    const [playIcon, setPlayIcon] = useState(false)

    return (
        <>
            <div className='flex h-[100px] w-[380px] bg-[#4038384d] items-center cursor-pointer hover:bg-[#6358584d] rounded-lg'
                onMouseEnter={() => {
                    setShowIcon(true);
                }}
                onMouseLeave={() => {
                    setShowIcon(false);
                }}>
                <Link href={`/playlist/${id}`} className="flex h-full w-full items-center cursor-pointer space-x-3">
                    <div className='h-full'>
                        <img src={image} alt="" className='w-24 h-full rounded-l-lg'/>
                    </div>
                    <div className='flex items-center flex-1'>
                        <p className='font-bold'>{title}</p>
                    </div>
                </Link>

                {
                    showIcon && <div className='flex justify-end' onClick={() => setPlayIcon(!playIcon)}>
                        {!playIcon ?
                            <PlayIcon className='w-14 h-14 text-[#1DB954] mr-2' />
                            :
                            <PauseIcon className='w-14 h-14 text-[#1DB954] mr-2' />}
                    </div>
                }
            </div>
        </>
    )
}
