import { use, useEffect } from "react";
import { useMovieStore } from "../store/useMovieStore";
import type { MovieGenres, MovieSearchResult } from "../types/MovieListTypes";
import type { AxiosResponse } from "axios";
import MovieList from "./MoviesList";

interface HomeContentProps {
    dataPromise: Promise<[AxiosResponse<MovieSearchResult>, AxiosResponse<MovieGenres>]>;
}

export default function HomeContent({ dataPromise }: HomeContentProps) {
    // 💡 use 훅을 쓰면 Suspense와 연동되어 Promise가 끝날 때까지 렌더링을 기다립니다.
    const [movieResult, genreResult] = use(dataPromise);
    const { setGenreMap, setMovies } = useMovieStore();

    useEffect(() => {
        const movieJson = movieResult.data.results;
        const genreJson = genreResult.data.genres;

        // Zustand 스토어 저장
        setMovies(movieJson);

        const genreMap: Record<number, string> = {};
        genreJson.forEach((genre) => {
            genreMap[genre.id] = genre.name;
        });
        setGenreMap(genreMap);
    }, [movieResult, genreResult, setMovies, setGenreMap]);
    
    return <MovieList />;
}