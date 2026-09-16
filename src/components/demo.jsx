import { useState } from "react";
import { Star, CalendarDays, X } from "lucide-react";

const MovieCard = ({ movie }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Movie Card */}
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img
            src={movie.image?.medium}
            alt={movie.name}
            className="h-80 w-full object-cover"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title">{movie.name}</h2>

          <div className="flex items-center justify-between">
            {/* Rating */}
            <div className="flex items-center gap-1">
              <Star
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />
              <span>{movie.rating?.average || "N/A"}</span>
            </div>

            {/* Date */}
            <div className="flex items-center gap-1">
              <CalendarDays
                size={18}
                className="text-red-500"
              />
              <span>
                {movie.premiered
                  ? new Date(movie.premiered).getFullYear()
                  : "N/A"}
              </span>
            </div>
          </div>

          {/* See Details */}
          <div className="card-actions mt-4 w-full">
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn btn-primary w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              See Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-gray-900 text-white shadow-2xl">

            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-red-600"
            >
              <X size={22} />
            </button>

            <div className="grid md:grid-cols-2">

              {/* Poster */}
              <img
                src={movie.image?.original || movie.image?.medium}
                alt={movie.name}
                className="h-full max-h-[500px] w-full object-cover"
              />

              {/* Information */}
              <div className="p-6">
                <h2 className="text-2xl font-bold">
                  {movie.name}
                </h2>

                <div className="mt-4 space-y-3 text-gray-300">
                  <p>
                    <strong>Rating:</strong>{" "}
                    ⭐ {movie.rating?.average || "N/A"}
                  </p>

                  <p>
                    <strong>Release Date:</strong>{" "}
                    {movie.premiered || "N/A"}
                  </p>

                  <p>
                    <strong>Language:</strong>{" "}
                    {movie.language || "N/A"}
                  </p>

                  <p>
                    <strong>Genres:</strong>{" "}
                    {movie.genres?.join(", ") || "N/A"}
                  </p>

                  <p>
                    <strong>Status:</strong>{" "}
                    {movie.status || "N/A"}
                  </p>

                  <p>
                    <strong>Runtime:</strong>{" "}
                    {movie.runtime
                      ? `${movie.runtime} minutes`
                      : "N/A"}
                  </p>
                </div>

                {/* Summary */}
                <div className="mt-5">
                  <h3 className="mb-2 text-lg font-semibold">
                    Summary
                  </h3>

                  <div
                    className="text-sm leading-6 text-gray-400"
                    dangerouslySetInnerHTML={{
                      __html:
                        movie.summary || "No summary available.",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieCard;