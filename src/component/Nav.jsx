import React from 'react'
import { Link } from 'react-router-dom'
import movieLogo from '../assets/movie_logo.svg'

const Nav = () => {
  return (
    <nav>
      <Link to="/"><img className='logo__img' src={movieLogo} alt="" /></Link>
      <ul className="nav__links">
        <li><Link className="nav__link link__hover--effect nav__home" to="/">Home</Link></li>
        <li><Link className="nav__link link__hover--effect" to="/movies">Movies</Link></li>
        {/* <li><Link className="nav__link contact__link" to="">Contact</Link></li> */}
      </ul>
    </nav>
  )
}

export default Nav
