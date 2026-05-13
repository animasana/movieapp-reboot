import axios from "axios";
import { useEffect, useState } from "react";
import type { MovieSearchResult, MovieGenres } from "../types/MovieListTypes";
import MovieList from "../components/MoviesList";
import styles from "./Home.module.css";
import { useMovieStore } from "../store/useMovieStore";
import { GENRE_URL, MOVIEDB_URL } from "../constants";

function Home() {
    const [loading, setLoading] = useState(true);      
    const { setGenreMap, setMovies } = useMovieStore();

    const getMovies = async () => {        
        try {
            const [movieResult, genreResult] = await Promise.all([
                axios.get<MovieSearchResult>(MOVIEDB_URL),
                axios.get<MovieGenres>(GENRE_URL),                
            ]);

            const movieJson = movieResult.data.results;
            const genreJson = genreResult.data.genres;
            
            setMovies(movieJson);            

            const genreMap: Record<number, string> = {};
            genreJson.forEach((genre) => {
                genreMap[genre.id] = genre.name;
            });

            setGenreMap(genreMap);
        } catch (error) {
            console.error("데이터를 불러오는 중 에러 발생:", error);
        } finally {
            setLoading(false);
        }
    };    

    useEffect(() => {
        getMovies();        
    }, []);

    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <h1>Loading...</h1>
                </div>
            ) : (                
                <MovieList />                
            )}            
        </div>
    );
}

export default Home;