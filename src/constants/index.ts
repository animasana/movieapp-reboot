export const API_KEY = import.meta.env.VITE_MOVIEDB_API_KEY;
export const MOVIEDB_URL = `${import.meta.env.VITE_BASE_URL}/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;
export const GENRE_URL = `${import.meta.env.VITE_BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=ko-KR`;
export const BASE_URL = import.meta.env.VITE_BASE_URL;