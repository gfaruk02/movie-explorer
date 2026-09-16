
import { useLoaderData } from "react-router";
import MovieCard from "../components/MovieCard";

const Movies = () => {

  const loadMovies = useLoaderData()
  // console.log(loadMovies)
  return (
    <div>
      {
        loadMovies.map((movie)=>( <MovieCard key={movie.id} movie={movie} /> ))
      }


    </div>
  );
};

export default Movies;