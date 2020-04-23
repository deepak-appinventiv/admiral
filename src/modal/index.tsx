/**
 * Declare Movie modal to map api key
 */
class MovieModal {
    adult: boolean = false;
    backdrop_path: string = "";
    genre_ids: Array<number> =[];
    id: number = 0;
    original_language: string = "";
    original_title: string = "";
    overview: string = "";
    popularity: number =  0;
    poster_path: string = "";
    release_date: string = "";
    title: string = "";
    video: boolean = false;
    vote_average: number =  0;
    vote_count: number =  0;
}

class MovieList {
    movies: Array<MovieModal> = [];
    page: number = 1;
    total_pages: number =0;
}

export {
    MovieList,
    MovieModal,
}