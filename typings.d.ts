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
  