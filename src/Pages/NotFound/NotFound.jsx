import { useEffect } from "react";
import { Link, useRouteError } from "react-router";

const NotFound = () => {
  const error = useRouteError();
  

  useEffect(() => {
    document.title = `404 - Page Not Found | Qanun.BD`;
  }, []);
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-[#f9f9f9] px-6">
        <div className="flex flex-col justify-center items-center h-screen text-center bg-white px-6">
          <h1 className="text-6xl font-bold text-red-600 mb-4">Oops!</h1>
          <p className="text-xl mb-2">Something went wrong.</p>
          {error?.message && (
            <p className="text-sm text-gray-600 mb-4">{error.message}</p>
          )}

          <Link
            to="/"
            className="mt-6 inline-block bg-[#0EA106] text-white font-medium py-2 px-6 rounded-full hover:bg-green-700 transition-all duration-300"
          >
            🔙 Go Back Home
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
