import { use } from "react";
import type { MovieDetailProps } from "../types/MovieDetailTypes";
import MovieDetail from "./MovieDetail";

export default function MovieContent({
    moviePromise,
}: {
    moviePromise: Promise<MovieDetailProps>;
}) {
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
