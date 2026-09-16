import { useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
     <nav className="bg-gray-950 text-white shadow-md"> 
      <div className="max-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="">
          Movie Zone
        </Link>
       {/* destop navbar */}

        <div className="hidden items-center gap-6 md:flex">
          <Link to="/" className="transition hover:text-red-500">
        Home
        </Link>
        <Link to="/movies" className="transition hover:text-red-500">
        Movies
        </Link>
        <Link to="/about" className="transition hover:text-red-500">
        About
        </Link>
        <Link to="/movies" className="rounded-lg bg-red-600 px-5 py-2 font-medium transition hover:bg-red-700">
        Browse Movie
        </Link>
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
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            <Link to="/movies" onClick={() => setIsOpen(false)}>
              Movies
            </Link>

            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>

            <Link
              to="/movies"
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-red-600 px-5 py-2 text-center font-semibold hover:bg-red-700"
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