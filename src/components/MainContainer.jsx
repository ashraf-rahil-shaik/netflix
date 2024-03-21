import React from 'react'
import { useSelector } from 'react-redux'

import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
const movies = useSelector(state=>state.movies.nowPlayingMovie)
if(movies === null) return;
const mainMovie = movies[0]
console.log(mainMovie)
const {original_title,overview,id} = mainMovie


  return (
    <div>
<VideoTitle title={original_title} overview={overview}/>
<VideoBackground  id={id}/>
    </div>
  )
}

export default MainContainer