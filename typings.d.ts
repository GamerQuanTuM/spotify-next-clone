import { StaticImageData } from "next/image";

interface Playlist {
    id: number | string;
    title: string;
    artist: string;
    image: undefined | string;
    album?: string,
    isAdmin?: boolean,
    userId?: string,
    description?: string,
    createdAt?: string,
    updatedAt?: string
}

interface PlaylistStore {
    fetchPlaylist(): Promise<void>;
    playlists: Playlist[];
    setPlaylists: (playlists: Playlist[]) => void;
    // addPlaylist: (playlist: Playlist) => void;
    // removePlaylist: (id: number) => void;
}
interface User {
    email: string,
    password: string,
    name: string
}

interface UserStore {
    user: User | null;
    setUser: (user: User) => void;
    clearUser: () => void;
}

declare module 'path/to/Run_BTS.mp3' {
    const value: string;
    export default value;
}
