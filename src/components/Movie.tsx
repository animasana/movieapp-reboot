import { Link } from "react-router";
import { useMovieStore } from "../store/useMovieStore";
import styles from "./Movie.module.css";

interface MovieProps {
    id: number;
    release_date?: string;
    poster_path: string;
    genre_ids: number[];
    title: string;
    overview: string;
}

function Movie({ 
    id, 
    release_date, 
    poster_path, 
    genre_ids, 
    title, 
    overview 
}: MovieProps) {
    
    const genreMap = useMovieStore((state) => state.genreMap);

    return (
        <div className={styles.movie}>
            <img
                src={`${import.meta.env.VITE_IMAGE_BASE_URL}${poster_path}`}
                alt={title}
                className={styles.movie__img}
            />
            <div>
                <h2 className={styles.movie__title}>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{release_date}</h3>
                <p>{overview.length > 256 ? `${overview.slice(0, 256)}...` : overview}</p>
                <ul className={styles.movie__genres}>
                    {genre_ids.map((genreId) => (
                        <li key={genreId}>{genreMap[genreId]}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Movie;
