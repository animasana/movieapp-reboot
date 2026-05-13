import type { MovieListProps } from "../types/MovieListTypes";
import Movie from "./Movie";
import styles from "./MoviesList.module.css";

function MovieList({ movies }: MovieListProps) {
    return (
        <div className={styles.movies}>
            {movies.map((movie) => (
                <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    genre_ids={movie.genre_ids}
                    overview={movie.overview}
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                />
            ))}
        </div>
    );
}

export default MovieList;
