import React from 'react'
import { Link } from 'react-router-dom';
import './nav-bar.scss'; 

const navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark navigation__bar bg-dark">
        <Link className="navbar-brand" to="#">Umei-Todo</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home-Page <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/completed-todos">Completed-Tasks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create-todo">Create-Todo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trashed-todos">Trashed-Todos </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default navbar;