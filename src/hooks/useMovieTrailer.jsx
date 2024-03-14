import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTrailerVideo } from "../utils/movieSlice"
import { options } from "../utils/constants"

const useMovieTrailer = (id) => {
 
    const dispatch =useDispatch()

    const getMovieVideo = async () =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,options)
        const json = await data.json()
        console.log(json)
const filterData = json.results.filter(item=> item.type === "Trailer")
const trailer =  filterData.length ?filterData[0]:json.result[0];


dispatch(addTrailerVideo(trailer))

    }
    useEffect(()=>{
        getMovieVideo()
    },[])
    
}


export default useMovieTrailer