import React from 'react';

function Movie({ title, image, description }) {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="card cardHeight color" id={title}>
        <img
          src={image}
          className="px-2 pt-2 rounded-bottom-0 rounded-4 card-image-top movie-image"
          alt=""
        />
        <div className="card-body cardFlex pt-2 mt-2">
          <h5 className="card-title fw-bold fs-4">{title}</h5>
          <p className="card-text textCard text-secondary fw-medium fs-6">{description}</p>
          <div className="text-end d-flex flex-column">
            <a className="pt-2 btn btn-warning mb-2">Download</a>
            <a href="#" className="btn btn-primary border-2">
              Watch Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
