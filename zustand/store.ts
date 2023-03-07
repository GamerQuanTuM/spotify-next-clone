import { create } from 'zustand';
import { makeRequest } from '../axios';
import { Playlist, PlaylistStore } from '../typings';

const usePlaylistStore = create<PlaylistStore>((set) => ({
    playlists: [],
    singlePlaylist: null,
    fetchPlaylist: async () => {
        const response = await makeRequest.get<Playlist[]>('/playlist')
        set({ playlists: response.data })
    },
    fetchPlaylistById: async (id: string) => {
        const response = await makeRequest.get<Playlist>(`/playlist/${id}`)
        set({ singlePlaylist: response.data });
    },
    // addPlaylist: (playlist: Playlist) =>
    //     set((state) => ({ playlists: [...state.playlists, playlist] })),
    // removePlaylist: (id: number) =>
    //     set((state) => ({
    //         playlists: state.playlists.filter((playlist) => playlist.id !== id),
    //     })),
}));

export default usePlaylistStore;
