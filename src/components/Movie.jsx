import React from 'react';

function Movie({ title, image, description }) {
  return (
    <div class="col-lg-4 col-sm-6">
      <div class="card cardHeight color">
        <img
          src={image}
          className="px-2 pt-2 rounded-bottom-0 rounded-4 card-image-top movie-image"
          alt=""
        />
        <div class="card-body cardFlex pt-2 mt-2">
          <h5 class="card-title fw-bold fs-4">{title}</h5>
          <p class="card-text textCard text-secondary fw-medium fs-6">{description}</p>
          <div class="text-end d-flex flex-column">
            <a class="pt-2 btn btn-warning mb-2">Download</a>
            <a href="#" class="btn btn-primary border-2">
              Watch Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movie;
