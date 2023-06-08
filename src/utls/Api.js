import React from 'react'
import axios from "axios";
const BASE_URL='https://api.themoviedb.org/3';
const TMBD_TOKEN ='eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZmM4MDlkOTU0MmEzNzM2Yjk5MDE5MDQ1YzFjOTBhYyIsInN1YiI6IjY0NTQ3ODdiODdhMjdhMDE3MjNkMWNmOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ny-nEq07gMlCUnhQiFTiJuouIUXXJQwahknSzVJBSRs';
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
