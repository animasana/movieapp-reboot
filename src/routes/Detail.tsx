import { Suspense } from "react";
import { useLoaderData } from "react-router";
import styles from "./Detail.module.css";
import type { MovieDetailProps } from "../types/MovieDetailTypes";
import { API_KEY, BASE_URL } from "../constants";
import MovieContent from "../components/MovieContent";

export const fetchMovie = async (id: string): Promise<MovieDetailProps> => {
    const json = await (
        await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=ko-KR`)
    ).json();

    return json;
};

interface IParams {
    params: Promise<{ id: string }>;
}

export const detailLoader = async ({ params }: IParams) => {
    const { id } = await params;
    const moviePromise = fetchMovie(id);
    return { moviePromise };
}

export interface IMovieDetailPromise {
    moviePromise: Promise<MovieDetailProps>;
}

function Detail() {
    const { moviePromise } = useLoaderData() as IMovieDetailPromise;

    return (
        <div className={styles.container}>
            <Suspense
                fallback={
                    <div className={styles.loader}>
                        <h1>Loading...</h1>
                    </div>
                }
            >
                <MovieContent moviePromise={moviePromise} />
            </Suspense>
        </div>
    );
}

export default Detail;
