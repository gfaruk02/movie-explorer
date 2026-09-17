import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
     <nav className="fixed top-0 left-0 z-50 w-full bg-gray-950 text-white shadow-md"> 
      <div className="max-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="">
         <img className="h-10 w-auto sm:h-12 md:h-14 lg:h-17 object-contain" src="https://i.ibb.co.com/BVfTb7jx/movie-explorer.png" alt="Movie Explorer" />
        </Link>
       {/* destop navbar */}
        <div className="hidden font-medium items-center gap-6 md:flex">
          <Link to="/" className="transition hover:text-red-700">Home</Link>
          <Link to="/movies" className="transition hover:text-red-700">Movies </Link>
          <Link to="/about" className="transition hover:text-red-700">About</Link>
          <Link to="/movies" className="rounded-lg bg-gray-900 border px-5 py-2 font-medium transition hover:bg-red-800">Browse Movie</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="block text-white md:hidden"
          >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-800 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link to="/" onClick={() => setIsOpen(false)}> Home</Link>
            <Link to="/movies" onClick={() => setIsOpen(false)}> Movies </Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>

            <Link
              to="/movies"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-gray-800 px-5 py-2 text-center font-semibold hover:bg-red-700"
            >
              Browse Movies
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;