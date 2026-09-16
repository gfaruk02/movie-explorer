import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-950 text-white">
        <div className=" mx-auto max-w-7xl px-14 py-10 sm:px-6 lg:px-8">

          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            
              <Link to="/">
                Movie Zone
              </Link>

              <p className="py-6 text-sm text-center dark:text-gray-400">
                © 2026 Movie Zone. All rights reserved.
              </p>
              <div className="flex flex-col gap-4 items-center justify-between font-semibold text-lg md:flex-row">
                <h3>
                  Follow us on:
                </h3>
                <div className="flex items-center  gap-4">
                  <a href="" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-sky-500">
                     <FaFacebookF size={18} />
                  </a>
                  <a href="" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-sky-500">
                      <FaTwitter size={18} />
                  </a>
                  <a href="" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-sky-500">
                     <FaInstagram size={18} />
                  </a>
                  <a href="" className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-sky-500">
                       <FaYoutube size={18} />
                  </a>

                </div>
              </div>

           

          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;