import React from "react";
import { Link } from "react-router-dom";
import { OutlineButton } from "../components/button/button";
import HeroSlide from "../components/hero-slide/heroSlide";
import MovieList from "../components/movie-list/movieList";
import { category, movieType, tvType } from "../api/tmdbApi";

export const Home = () => {
  return (
    <>
      <HeroSlide />
      <div className="container">
        <div className="section mb-3 ">
          <div className="section_header mb-2">
            <h2>Trending Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>
        <div className="section mb-3 ">
          <div className="section_header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to="/movie">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>
        <div className="section mb-3 ">
          <div className="section_header mb-2">
            <h2>Trending TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>
        <div className="section mb-3 ">
          <div className="section_header mb-2">
            <h2>Top Rated TV</h2>
            <Link to="/tv">
              <OutlineButton className="small">View More</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
};
