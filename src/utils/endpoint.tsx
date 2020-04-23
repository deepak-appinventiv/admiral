import Utils from "../utils";
/**
 * Define end point for the api call.
*/
export default {
    getMovies:(page: number)=> `discover/movie?api_key=${Utils.Constant.api_key}&page=${page}`
}