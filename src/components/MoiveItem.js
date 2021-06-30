import style from '../scss/moiveItem.module.scss'
import { Link } from 'react-router-dom'

function MoiveItem(props) {
  const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

  const rate = props.rate
  return (
    <>
      <div className={style.movie}>
        <img src={IMG_PATH + props.image} alt={props.title} />
        <div className={style.movie_info}>
          <h3>{props.title}</h3>
          {(rate >= 8 && (
            <span
              style={{
                color: 'green',
              }}
            >
              {rate}
            </span>
          )) ||
            (rate >= 5 && (
              <span
                style={{
                  color: 'orange',
                }}
              >
                {rate}
              </span>
            )) || (
              <span
                style={{
                  color: 'red',
                }}
              >
                {rate}
              </span>
            )}
        </div>
        <div className={style.movie_Overview}>
          <Link to={`/${props.id}`}>
            <button className={style.button}>Overview</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default MoiveItem
