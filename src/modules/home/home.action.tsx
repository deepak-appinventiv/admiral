import Utils from "../../utils";

function getMovie(dispatch: Function, getState: Function, requestType: number = Utils.Constant.requestType.initialLoading, callback: Function = () => { }) {
    let { page, movies } = getState().homeReducer;
    let endPoint = Utils.EndPoint.getMovies(page);
    Utils.Api.getApiCall(endPoint, "", (response: any) => {
        if (response.status) {
            let data = response.data;
            let movieList = data.results;
            if (requestType === Utils.Constant.requestType.loadMore) {
                movieList = movies.concat(movieList);
            }
            let payload = {
                movies: movieList,
                page: page + 1,
                total_pages: data.total_pages,
            }
            dispatch({ type: Utils.ActionName.GET_MOVIES, payload: payload })

        }
        callback();
    }, (error: any) => {
        callback();
        console.log("error", error)
    })
}

export function getMovieListing(callback: Function) {
    return (dispatch: Function, getState: Function) => {
        getMovie(dispatch, getState, Utils.Constant.requestType.initialLoading, callback)
    }
}
export function loadMoreMoviewListing() {
    return (dispatch: Function, getState: Function) => {

    }
}