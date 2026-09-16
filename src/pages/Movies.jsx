
import { useLoaderData } from "react-router";
import MovieCard from "../components/MovieCard";

const Movies = () => {

  const loadMovies = useLoaderData()
  // console.log(loadMovies)
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {
        loadMovies.map((movie)=>( <MovieCard key={movie.id} movie={movie} /> ))
      }


    </div>
  );
};

export default Movies;