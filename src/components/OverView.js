import { useParams } from 'react-router-dom'
import style from '../scss/overView.module.scss'

function OverView(props) {
  const params = useParams()

  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

  const movieId = props.Movies.find((movie) => {
    // eslint-disable-next-line eqeqeq
    return movie.id == params.overviewId
  })

  if (!movieId) {
    return <p className={style.noMvoie}> NoMoviesFound Press Home Pleses</p>
  }

  return (
    <section className={style.overview}>
      <div className='container'>
        <div className={style.overview_content}>
          <div className='img'>
            <img src={IMG_PATH + movieId.poster_path} alt='' />
          </div>
          <div className={style.content}>
            <div className={style.maininfo}>
              <h1>{movieId.title}</h1>
              <strong>OverView</strong>
              <p>{movieId.overview}</p>
            </div>
            <div className={style.moreinfo}>
              <h1>
                <span>ReleaseDate:</span> {movieId.release_date}
              </h1>
              {movieId.adult ? (
                <p style={{ color: 'red' }}>18+</p>
              ) : (
                <p style={{ color: 'orange' }}>16+</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OverView
