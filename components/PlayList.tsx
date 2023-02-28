import { StaticImageData } from 'next/image'
import React from 'react'
import { Playlist } from '../typings'

type Props = {
    content: Playlist
}

export default function PlayList({ content: { id, title, img, artist } }: Props) {
    return (
        <div className=''>
            <p>{title.slice(0, 20)}{title.length > 20 && '...'}</p>
        </div>
    )
}
