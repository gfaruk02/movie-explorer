import { Link } from "react-router";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[600px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=2000&q=80')",
      }}
    >

    <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative mx-auto flex min-h-[600px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-white">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-red-500 sm:text-base">
            Welcome to MovieZone
          </p>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Discover Your Next
            <span className="block text-red-500">
              Favorite Movie
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
            Explore an amazing collection of movies, discover new stories,
            and find the perfect film for your next movie night.
          </p>
          <Link
            to="/movies"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white shadow-lg shadow-red-600/30 transition-all duration-300 hover:scale-105 hover:bg-red-700"
          >
            Explore Movies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;