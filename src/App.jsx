import { useState,useEffect } from 'react'
import './App.css'
import { fetchFromApi } from "./utls/Api";
import { useSelector, useDispatch } from 'react-redux'
import { getApiConfigaration, getGenres } from './store/homeSlice';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from './component/header';
import Footer from './component/Footer';
import Home from './pages/home/Home';
import Explore  from "./pages/explore/Explore";
import Details from './pages/details/Details';
import SearchResults from './pages/searchresults/SearchResults';

function App() {
  const dispatch = useDispatch();
  const fetchgeners= async()=>{
    let promices = [];
    let endPoints = ['movie','tv'];
    let allGenres = {}
   Array.from(endPoints).forEach((url)=>{
      promices.push(fetchFromApi(`/genre/${url}/list`))
    })
    const data = await Promise.all(promices)
    data.map(({genres})=>{
      return genres.map((item)=>(allGenres[item.id]=item))
    })
    dispatch(getGenres(allGenres));
  }


  useEffect(()=>{
    fetchApiConfig()
    fetchgeners()
  },[])
  const fetchApiConfig = ()=>{
    fetchFromApi('/configuration')
    .then((response)=>{
      console.log(response)
      const url = {
        backdrop: response.images.secure_base_url +'original',
        poster: response.images.secure_base_url +'original',
        profile: response.images.secure_base_url +'original',
      }
      dispatch(getApiConfigaration(url))
    })
  }
  return (
    <>
     {/* {url?.total_pages} */}
    
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/:mediaType/:id' element={<Details/>}></Route>
      <Route path='/search/:query' element={<SearchResults/>}></Route>
      <Route path='/explore/:mediaType' element={<Explore/>}></Route>
     </Routes>
     <Footer/>
     </BrowserRouter>
    
    </>
  )
}

export default App
