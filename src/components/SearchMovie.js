import { useRef } from 'react'
import style from '../scss/searchMovie.module.scss'
import { useHistory } from 'react-router'

function SearchMovie(props) {
  const searchValue = useRef()
  const history = useHistory()

  const getUserValue = (event) => {
    event.preventDefault()

    const inputValue = searchValue.current.value

    if (inputValue.trim().length === 0) {
      alert('Please enter a valid input')
      return
    }

    searchValue.current.value = ''

    props.onUserInput(inputValue)
    history.replace('/')
  }

  return (
    <nav>
      <div className='container'>
        <div className={style.navbar}>
          <div>
            <h1>
              <a href='/'>MoviesAPI</a>
            </h1>
          </div>
          <div className={style.search_place}>
            <a href='/'>Home</a>
            <form onSubmit={getUserValue}>
              <input
                ref={searchValue}
                className={style.search}
                placeholder='Search'
                type='text'
              />
            </form>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default SearchMovie
