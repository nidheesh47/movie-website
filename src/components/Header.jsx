import React from 'react';
import { movies } from '../helpers/constants';

function Header() {
  return (
    <div>
      <>
        {/* Hello world */}
        <nav className="navbar navbar-expand-lg shadow-border">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img
               src="/image/logo-om.png"
                alt=""
                style={{ width: '200px' }}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active fw-medium" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link fw-medium" href="#">
                    IMDB TOP
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle fw-medium"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Collections
                  </a>
                  <ul className="dropdown-menu">
                    {movies.map((movie, index) => (
                      <li key={index}>
                        <a className="dropdown-item" href={`#${movie.title}`}>
                          {movie.title}
                        </a>
                      </li>
                    ))}
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        See More..
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href='#about' className='nav-link fw-medium'>
                    About
                  </a>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}

export default Header;
