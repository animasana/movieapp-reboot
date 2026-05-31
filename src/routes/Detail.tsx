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

export const detailLoader = async ({
    params,
}: {
    params: { id: string };
}) => {
    const moviePromise = fetchMovie(params.id);
    return { moviePromise };
}

function Detail() {
    const { moviePromise } = useLoaderData() as Awaited<
        ReturnType<typeof detailLoader>
    >;

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
