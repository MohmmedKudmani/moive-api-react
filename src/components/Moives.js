import { useEffect, useState } from 'react'
import axios from 'axios'
import MoiveItem from './MoiveItem'
import style from '../scss/moives.module.scss'

const Movie_API =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=82e995992f39b57703e9ea800831cf76&page=2'
const Search_API =
  'https://api.themoviedb.org/3/search/movie?api_key=82e995992f39b57703e9ea800831cf76&query="'

function Moives(props) {
  const [Movies, setMovies] = useState([])

  useEffect(() => {
    const getMoives = async (url) => {
      const res = await axios.get(url)

      setMovies(res.data.results)
      props.onMovieData(res.data.results)
    }

    getMoives(Movie_API)

    if (props.userData) {
      getMoives(Search_API + props.userData)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.userData])

  return (
    <>
      <div className='container'>
        <div className={style.moviesitems}>
          {Movies.map((item) => {
            return (
              <MoiveItem
                id={item.id}
                title={item.title}
                // releasedata={item.release_date}
                rate={item.vote_average}
                image={item.poster_path}
                key={item.id}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Moives
