import { options } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovie } from '../utils/movieSlice';
import { useEffect } from 'react';


const useNowPlayingMovies = () =>{
    const dispatch =useDispatch()

const getNowPlaying = async() =>{
const data = await fetch(
  'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',options)
const json = await data.json();

dispatch(addNowPlayingMovie(json.results))
}


useEffect(()=>{
getNowPlaying()
},[])
}





export default useNowPlayingMovies