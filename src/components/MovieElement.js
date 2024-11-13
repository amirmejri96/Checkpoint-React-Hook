import React from 'react'
import { Link } from 'react-router-dom';

const MovieElement = ({el}) => {
    const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
    return (
      <Link to={`/trailer/${el.id}`}  >
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
    </Link>
  )
}

export default MovieElement