import Utils from "../utils";
/**
 * 
 * @param endPoint api end point 
 * @param params api url parameter
 * @param successCallback function for handle success response 
 * @param errorCallback function for handle error response
 */
const getApiCall = (endPoint: string, params: string = "", successCallback: Function, errorCallback: Function) => {
    
    Utils.Constant.axios.get(Utils.Constant.apiUrl + endPoint + params, {}).then((response: any) => {
        successCallback(response);
    }).catch((error: any) => {
        if (error.code === "ECONNABORTED") {
            let payload = {
                data: {
                    status: 408
                }
            }
            errorCallback(payload);
        }
        else if (error.response) {     
            errorCallback(error.response)
        }
        else if (!error.response) {
            let payload = {
                data: {
                    status: ""
                }
            }
            errorCallback(payload);
        }
    })
}


/**
 * export all function
 */
export default {
    getApiCall,
}


