import React from 'react'
import { useParams } from 'react-router-dom'
import { Data } from './Data'

const Description = () => {
  const {id} = useParams()
  const FindMovie = Data.find((el)=> el.id === Number(id))

  const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

  return (

   <div>
<main className="content">
    <section className="synopsis">
     <img src={IMG_PATH + `${FindMovie.poster_path}`}/> 
      <h2>{FindMovie.title}</h2>
      <p>
        {FindMovie.overview}
        </p>
    </section>

    <section className="trailer">
      <h2>Bande d'annonce</h2>
    </section>
  </main>

  <footer className="footer">
    <p>&copy; 2024 Nom du Studio. Tous droits réservés.</p>
  </footer>
  </div>

  )
}

export default Description