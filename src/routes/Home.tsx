import axios from "axios";
import { Suspense } from "react";
import type { MovieSearchResult, MovieGenres } from "../types/MovieListTypes";
import styles from "./Home.module.css";
import { GENRE_URL, MOVIEDB_URL } from "../constants";
import HomeContent from "../components/HomeContent";
import { useLoaderData } from "react-router";

export const homeLoader = async () => {
    const movies = axios.get<MovieSearchResult>(MOVIEDB_URL);
    const genres = axios.get<MovieGenres>(GENRE_URL);

    return { homeData: Promise.all([movies, genres]) };
};

function Home() {
    const { homeData } = useLoaderData() as Awaited<
        ReturnType<typeof homeLoader>
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
                <HomeContent dataPromise={homeData} />
            </Suspense>
        </div>
    );
}

export default Home;
