"use client"
import React, { useEffect, useState } from 'react'
import { Playlist } from '../typings'
import usePlaylistStore from '../zustand/store'
import CardPlaylist from './CardPlaylist'

type Props = {
    header: string
}

export default function ScrollableCardPlaylist({ header }: Props) {
    const [randomPlaylists, setRandomPlaylists] = useState<Playlist[]>([])
    const playlists = usePlaylistStore((state) => state.playlists)

    useEffect(() => {
        // Shuffle the playlists array
        const shuffledPlaylists = [...playlists].sort(() => 0.5 - Math.random())
        // Get the first 6 elements
        const selectedPlaylists = shuffledPlaylists.slice(0, 6)
        setRandomPlaylists(selectedPlaylists)
    }, [playlists])

    return (
        <div>
            <div className='text-white font-bold mx-6 mb-4 text-2xl'>{header}</div>
            <div className='flex gap-5 mx-6'>
                {randomPlaylists.map(({ id, artist, img, title }) => (
                    <CardPlaylist key={id} id={id} artist={artist} img={img} title={title} />
                ))}
            </div>
        </div>
    )
}
