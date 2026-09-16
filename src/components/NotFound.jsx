import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="text-center p-4">
        <h1 className=" text-3xl"> Page not found</h1>

        <div className="p-2 text-red-500">
            Sorry, that page dose not exists.
        </div>
        <Link to="/"> 
            <button className="rounded-full bg-blue-600 text-white py-3 px-3 font-semibold">
                Back to Home
            </button>
            
        </Link>

    </div>
  );
};

export default NotFound;