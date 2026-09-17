
import { useLoaderData, useSearchParams } from "react-router";
import MovieCard from "../components/MovieCard";

const Movies = () => {

  const loadMovies = useLoaderData()

  const [search, setSearch] = useSearchParams()

  const query = search.get("q");

  const handelSearch = (e) =>{
    const value = e.target.value;
    if(value.trim()){
      setSearch({q: value})
    }else{
      setSearch({})
    }
  }
  return (

    <>
      <div className="p-5 md:mt-6">
        <label className="input w-full max-w-2xl mx-auto flex">
           <svg
      className="h-[1em] opacity-50"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <g
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="2.5"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </g>
    </svg>

          <input value={query} onChange={handelSearch} type="search" required placeholder="Search for a movie...     " />
        </label>
      </div>


    
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5">
      {
        loadMovies.map((movieItem)=>{ 
          const movie = movieItem.show || movieItem;
          return ( <MovieCard key={movie.id} movie={movie} /> )})
      }


    </div>
    </>
  );
};

export default Movies;