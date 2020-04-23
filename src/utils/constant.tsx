import axios from "axios";
/**
 * setup axios instance
*/
const $axios = axios.create({
    baseURL: `https://api.themoviedb.org/3/`,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    }
});
const apiUrl = "";
/**
 * baseUrl for moview poster
 */
const posterBaseUrl = "http://image.tmdb.org/t/p/w200/";
/**
 * define contant for color code
 */
const color = {
    white: "#ffffff",
    primaryColor: "#FFC100",
    transparent: 'rgba(0,0,0,0.1)',
    transparentButton: 'rgba(0,0,0,0.0)',
    
}
/**
 * define request type of the api request 
*/
enum requestType {
    initialLoading = 1,
    loadMore = 2,
}

const cattegory = [{
    title: "IOI CITY MALL",
    color: ['#eeaeca', '#6ecdc0', '#82c3d6', '#94bbe9'],
},{
    title: "PAVILLION",
    color: ['#020024', '#5e5eb3', '#00d4ff'],
},{
    title: "NU SENTAL",
    color: ['#22c1c3', '#9cb466', '#bab14f', '#e8ac2c'],
},{
    title: "OMAX GRANDE",
    color: ['#833ab4', '#fd1d1d', '#fc7234', '#fcb045'],
},{
    title: "GIP MALL",
    color: ['#ffd900', '#ffd000', '#ffbe00', '#ffaa00', '#ffa200'],
}]

export default {
    color,
    apiUrl,
    cattegory,
    requestType,
    posterBaseUrl,
    api_key:'df9b55dfc4d19cfda75f35a1505c8d36',
    axios: $axios,
    
}