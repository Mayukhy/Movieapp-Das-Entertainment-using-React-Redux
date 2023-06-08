
import './header.scss';
import React, { useState, useEffect } from "react";
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import { Link, useNavigate,useLocation } from "react-router-dom";
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import CancelIcon from '@mui/icons-material/Cancel';
import CloseIcon from '@mui/icons-material/Close';
export default function Header(){
    const navigate= useNavigate();
    const [show, setShow] = useState("top");
    const [lastScrollY, setLastScrollY] = useState(0);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [query, setQuery] = useState("");
    const [showSearch, setShowSearch] = useState("");
    const location = useLocation();
    const navigationHandler=(type)=>{
    if (type==='movie') {
    navigate('/explore/movie')
    }
    if (type==='tv') {
      navigate('/explore/tv')
    }
    setMobileMenu(false)
    }
    const controlNavber = ()=>{
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow('hide')
      }
    else{
      setShow('top')
  }
  setLastScrollY(window.scrollY)
}
}
    useEffect(()=>{
    window.addEventListener('scroll',controlNavber)
    return ()=>{
      window.removeEventListener('scroll',controlNavber)
    }
    },[lastScrollY])

    useEffect(()=>{
     window.scrollTo(0,0)
    },[location])
    const openMenue =()=>{
      setMobileMenu(!mobileMenu)
    }
    const SearchPlace =()=>{
      setShowSearch(true)
    }
    const HandelSubmit =(e)=>{
      if (e.key==='Enter' && query.length>0) {
       navigate(`/search/${query}`) 
       setTimeout(() => {
        setShowSearch(false)
       }, 2000);
      }
    };
    return (
        <header className={mobileMenu? "header mobileView":`header ${show}`}>
          <div className="logo">
            <Link style={{
              textDecoration:'none',
              display:'flex'
            }} to='/'>
            <MovieFilterIcon style={{
            width:'60px',
            height:'60px',
            color:'#a369c7',
            padding:'10px 0px'
          }}/>
          <span className='Logoname' style={{
            padding:'22px 0px',
            fontSize:'20px',
          }}>Das Entertainment</span>
            </Link>

          </div>
          <ul className='menuItems'>
            <li className="menuItem" onClick={()=>navigationHandler('movie')}>Movies</li>
            <li className="menuItem" onClick={()=>navigationHandler('tv')}>Tv Shows</li>
            <li className="menuItem"><LocationSearchingIcon onClick={SearchPlace}/></li>
          </ul>
          <div className="mobileMenuItems">
          <LocationSearchingIcon onClick={SearchPlace}/>
          {mobileMenu?<CancelIcon onClick={openMenue}/>:<MenuOpenIcon onClick={openMenue} />}
          </div>
         { showSearch && <div className="searchBar">
        <input className='searchInput' type="text" placeholder='Search Movies Or Tv Shows'
       onChange={(e)=>setQuery(e.target.value)} onKeyUp={HandelSubmit} />
        <CloseIcon style={{
          marginTop:'15px',
          cursor:'pointer'
        }} onClick={()=>{
          setShowSearch(false)
        }}/>
      </div>}
        </header>
    );
};
