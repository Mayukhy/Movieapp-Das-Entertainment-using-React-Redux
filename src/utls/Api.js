//TMDB api is used for getting Movie Data
import React from 'react'
import axios from "axios";
const BASE_URL='https://api.themoviedb.org/3';
const TMBD_TOKEN ='use own TMDB Token';
const headers={
 Authorization: "bearer " + TMBD_TOKEN  
}
export const fetchFromApi = async(url,params) =>{
try {
    const {data} = await axios.get(BASE_URL + url,{headers,params})
    return data;
} catch (error) {
    console.log(error)
    return error;
}

}
