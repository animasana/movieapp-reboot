import { Link } from "react-router";
import styles from "./MovieDetail.module.css";
import type { MovieDetailProps } from "../types/MovieDetailTypes";


function MovieDetail({release_date, poster_path, title, overview, genres}: MovieDetailProps) {
    return (
        <>
            <div className={styles.movie}>
                <img 
                    src={`${import.meta.env.VITE_IMAGE_BASE_URL}${poster_path}`} 
                    alt={title} 
                    className={styles.movie__img}
                />                
                <div>
                    <h2 className={styles.movie__title}>{title}</h2>
                    <h3 className={styles.movie__year}>{release_date}</h3>                    
                    <p>{overview}</p>
                    <ul className={styles.movie__genres}>
                        {genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>                    
                </div>
                <Link to="/">&larr;Back</Link>                    
            </div>                        
            
        </>        
    );
}

export default MovieDetail;