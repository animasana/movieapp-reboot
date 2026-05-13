import { create } from "zustand";
import type { MovieProps } from "../types/MovieListTypes";

interface MovieState {
    genreMap: Record<number, string>;
    setGenreMap: (map: Record<number, string>) => void;
    movies: MovieProps[];
    setMovies: (movies: MovieProps[]) => void;
}

export const useMovieStore = create<MovieState>((set) => ({
    genreMap: {},
    setGenreMap: (map) => set({ genreMap: map }),
    movies: [],
    setMovies: (list) => set({ movies: list }),
}));