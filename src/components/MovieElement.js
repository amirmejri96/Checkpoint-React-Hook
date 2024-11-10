import React from 'react'


const MovieElement = ({el}) => {
    const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
    return (
    <div className='movie'>
          <img src={IMG_PATH + `${el.poster_path}`} alt={el.title} />

    <div className="movie-info">
      <h3>{el.title}</h3>
      <span className="$getclassNameByRate(vote_average)">{el.vote_average}</span>
    </div>
    <div className="overview">
      <h3>{el.overview}</h3>
      Overview
    </div>
    </div>
  )
}

export default MovieElement