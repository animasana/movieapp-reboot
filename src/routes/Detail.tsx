import { useEffect, useState } from "react";
import { useParams } from "react-router";
import styles from "./Detail.module.css";
import type { MovieDetailProps } from "../types/MovieDetailTypes";
import MovieDetail from "../components/MovieDetail";
import { API_KEY, BASE_URL } from "../constants";


function Detail() {
    
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState<MovieDetailProps>({} as MovieDetailProps);

    const getMovie = async () => {
        try {
            const json = await (
                await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`)
            ).json();

            setMovie(json);
            
        } catch (error) {
            console.log("영화 상세 정보를 가져오지 못했습니다.", error);            
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getMovie();        
    }, []);
    
    return (
        <div className={styles.container}>
            {loading ? (
                <div className={styles.loader}>
                    <h1>Loading...</h1>
                </div>
            ) : (            
                <MovieDetail
                    id={movie.id}
                    release_date={movie.release_date}
                    poster_path={movie.poster_path}
                    title={movie.title}
                    genres={movie.genres}
                    overview={movie.overview}                    
                />  
            )}
        </div>
    );
}

export default Detail;
