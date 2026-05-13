import { create } from "zustand";

interface MovieState {
    genreMap: Record<number, string>;
    setGenreMap: (map: Record<number, string>) => void;    
}

export const useMovieStore = create<MovieState>((set) => ({
    genreMap: {},
    setGenreMap: (map) => set({ genreMap: map }),
}));