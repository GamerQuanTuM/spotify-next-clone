import { StaticImageData } from "next/image";

interface Playlist {
    id: number;
    title: string;
    artist: string;
    img: StaticImageData | string;
}

interface PlaylistStore {
    playlists: Playlist[];
    setPlaylists: (playlists: Playlist[]) => void;
    addPlaylist: (playlist: Playlist) => void;
    removePlaylist: (id: number) => void;
}