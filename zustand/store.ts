import { create } from 'zustand';
import { makeRequest } from '../axios';
import { Playlist, PlaylistStore } from '../typings';
import { carouselItem as playlists } from '../utils/data'

const usePlaylistStore = create<PlaylistStore>((set) => ({
    playlists: [],
    setPlaylists: (playlists: Playlist[]) => set({ playlists }),
    fetchPlaylist: async () => {
        const response = await makeRequest.get<Playlist[]>('/playlist')
        set({ playlists: response.data, ...playlists })
    },
    addPlaylist: (playlist: Playlist) =>
        set((state) => ({ playlists: [...state.playlists, playlist] })),
    removePlaylist: (id: number) =>
        set((state) => ({
            playlists: state.playlists.filter((playlist) => playlist.id !== id),
        })),
}));

export default usePlaylistStore;
