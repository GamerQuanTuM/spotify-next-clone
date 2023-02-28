import {create} from 'zustand';
import { Playlist, PlaylistStore } from '../typings';
import {carouselItem as playlists} from '../utils/data'

const usePlaylistStore = create<PlaylistStore>((set) => ({
    playlists: playlists,
    setPlaylists: (playlists: Playlist[]) => set({ playlists }),
    addPlaylist: (playlist: Playlist) =>
        set((state) => ({ playlists: [...state.playlists, playlist] })),
    removePlaylist: (id: number) =>
        set((state) => ({
            playlists: state.playlists.filter((playlist) => playlist.id !== id),
        })),
}));

export default usePlaylistStore;
