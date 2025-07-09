import React, { useEffect } from "react";

import { Link } from "react-router";
import { useState } from "react";
import SingleLawyer from "./SingleLawyer";

const Lawyers = ({ data }) => {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setLawyers(data);
    }
  }, [data]);

  console.log("lawyers", lawyers);

  return (
    <section className="mt-[100px]">
      <h2 className="text-4xl  text-center font-bold text-[#0F0F0F]">
        We Provide Best Law Services
      </h2>
      <p className="text-center mt-8 ">
        Our platform connects you with verified, experienced Lawyers across
        various specialities — all at your convenience.
      </p>

      <div className="mt-[75px] grid grid-cols-1 lg:grid-cols-2 gap-16">
        {lawyers.map((lawyer, i) => (
          <SingleLawyer key={i} lawyer={lawyer} />
        ))}
      </div>
    </section>
  );
};

export default Lawyers;
