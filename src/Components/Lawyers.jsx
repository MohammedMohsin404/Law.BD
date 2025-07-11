import { useLoaderData, useNavigation } from "react-router";
import { useEffect, useState } from "react";
import SingleLawyer from "./SingleLawyer";


const Lawyers = () => {
  const data = useLoaderData();
  const navigation = useNavigation();
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  // Show at least 2 seconds loading
  useEffect(() => {
    if (navigation.state === "loading") {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // If data loads fast, still show for 2 seconds
      const timer = setTimeout(() => {
        setLoading(false);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [navigation.state]);

  const visibleLawyers = showAll ? data : data.slice(0, 6);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner text-primary text-4xl"></span>
      </div>
    );
  }

 

  return (
    <section className="mt-16">
       
      <h2 className="text-4xl text-center font-bold">Our Lawyers</h2>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {visibleLawyers.map((lawyer, index) => (
          <SingleLawyer key={index} lawyer={lawyer} />
        ))}
      </div>

      {data.length > 6 && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </section>
  );
};

export default Lawyers;
