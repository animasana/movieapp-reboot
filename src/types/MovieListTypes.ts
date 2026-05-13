/**
 * 영화 정보 검색 결과에 대한 인터페이스
 */
export interface MovieSearchResult {
  page: number;
  results: MovieProps[];
};

/**
 * 개별 영화 상세 정보 인터페이스
 */
export interface MovieProps {
  adult?: boolean;             
  backdrop_path?: string;      
  genre_ids: number[];
  id: number;                  
  title: string;               
  original_language?: string;  
  original_title?: string;     
  overview: string;            
  popularity?: number;         
  poster_path: string;         
  release_date?: string;       
  softcore?: boolean;          
  video?: boolean;             
  vote_average?: number;       
  vote_count?: number;
};

export interface MovieListProps {
  movies: MovieProps[];
};

export interface MovieGenre {
  id: number;
  name: string;
};

export interface MovieGenres {
  genres: MovieGenre[];
};
