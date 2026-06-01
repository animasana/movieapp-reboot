import { use } from "react";
import type { MovieDetailProps } from "../types/MovieDetailTypes";
import MovieDetail from "./MovieDetail";

interface IMovieDetailPromise {
    moviePromise: Promise<MovieDetailProps>;
}

export default function MovieContent({ moviePromise }:IMovieDetailPromise) {
    
    const movie = use(moviePromise);
    
    return (
        <MovieDetail
            id={movie.id}
            release_date={movie.release_date}
            poster_path={movie.poster_path}
            title={movie.title}
            genres={movie.genres}
            overview={movie.overview}
        />
    );
}
