import './scss/style.scss'
import Moives from './components/Moives'
import SearchMovie from './components/SearchMovie'
import OverView from './components/OverView'
import { useState } from 'react'
import { Route } from 'react-router-dom'

function App() {
  const [userDataValue, setUserDataValue] = useState('')
  const [movieDataId, setMovieDataId] = useState([])

  const getMovieData = (movies) => {
    setMovieDataId(movies)
  }

  const getUserInput = (userData) => {
    setUserDataValue(userData)
  }

  return (
    <>
      <Route>
        <SearchMovie onUserInput={getUserInput} />
      </Route>
      <Route path='/' exact>
        <Moives onMovieData={getMovieData} userData={userDataValue} />
      </Route>
      <Route path='/:overviewId'>
        <OverView Movies={movieDataId}/>
      </Route>
    </>
  )
}

export default App
