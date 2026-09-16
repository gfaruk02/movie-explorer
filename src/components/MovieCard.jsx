import { CalendarDays, Star } from "lucide-react";
import { useState } from "react";

const MovieCard = ({movie}) => {

    const [showModel, setShowModel] = useState(false)
    // console.log("object", movie)
  return (
    <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img className=" w-full"
                src={movie.image?.medium}
                alt={movie.name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{movie.name}</h2>
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <Star
                        size={18}
                        className="fill-yellow-400 text-yellow-400"
                        />
                        <span className="text-sm text-gray-300"> {movie.rating?.average}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CalendarDays size={18} className="text-white" />
                        <span className="text-sm text-gray-300"> {movie.premiered}</span>
                    </div>
                </div>
                <div className="card-actions w-full">
            
                <button className="btn btn-primary w-full transition duration-300 hover:scale-105 hover:shadow-lg" onClick={()=>setShowModel(true)}>See Details</button>

                </div>
             </div>
        </div>

 {
    showModel && (
     <dialog open className="modal">
        <div className="modal-box max-w-2xl">
            <div method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button onClick={() => setShowModel(false)} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-gray-800 hover:bg-red-700">✕</button>
            </div>

            <div className="grid md:grid-cols-2">

                    <figure>
                        <img className="h-full max-h-[500px] w-full object-cover"
                        src={movie.image?.original}
                        alt={movie.name} />
                    </figure>
                 <div className="px-3 py-2">
                    <h3 className="font-bold text-lg"> {movie.name} </h3>
                    <div className="flex items-center justify-between gap-4 mt-1">
                        <div className="flex items-center gap-2">
                            <Star
                            size={18}
                            className="fill-yellow-400 text-yellow-400"
                            />
                            <span className="text-sm text-gray-300"> {movie.rating?.average}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CalendarDays size={18} className="text-white" />
                            <span className="text-sm text-gray-300"> {movie.premiered}</span>
                        </div>
                    </div>

                    <p>
                        <strong>Release Date: </strong>
                        {movie.premiered}
                    </p>
                    <p>
                        <strong>Language: </strong>
                        {movie.language}
                    </p>
                    <p>
                    <strong>Genres: </strong>
                    {movie.genres?.join(", ") || "N/A"}
                  </p>
                  <div className="flex items-center justify-between gap-4">
                        <p>
                            <strong>Runtime: </strong>
                            {movie.runtime}
                        </p>
                        <p>
                            <strong>Average Runtime: </strong>
                            {movie.averageRuntime}
                        </p>
                    </div>
            <div className="mt-2">
                  <h3 className="mb-1 text-lg font-semibold">
                    Summary
                  </h3>

                  <div
                    className="text-[12px] leading-6 text-gray-400"
                    dangerouslySetInnerHTML={{
                      __html:
                        movie.summary || "No summary available.",
                    }}
                  />
                </div>

                <div className="modal-action">
                    {/* if there is a button in form, it will close the modal */}
                    <button  onClick={() => setShowModel(false)} className="btn bg-gray-800 hover:bg-red-700">Close</button>
                </div>
             </div>
            </div>
      
        </div>
        <div
            className="modal-backdrop"
            onClick={() => setShowModel(false)}
        ></div>
    </dialog> 
           
    )
 }
    </div>
    



  );
};

export default MovieCard;