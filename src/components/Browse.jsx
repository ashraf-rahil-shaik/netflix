import React, { useEffect } from 'react'
import Header from './Header'
import { options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovie } from '../utils/movieSlice';

const Browse = () => {
  const dispatch =useDispatch()

const getNowPlaying = async() =>{
const data = await fetch(
  'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',options)
const json = await data.json();
console.log(json.results)
dispatch(addNowPlayingMovie(json.results))
}

useEffect(()=>{
getNowPlaying()
},[])




  return (
    <div>
      
  <Header/>
  
      </div>

  )
}
export default Browse