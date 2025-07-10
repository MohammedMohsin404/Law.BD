import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';

const LawyersDetails = () => {
  const allLawyers = useLoaderData();
  const { id } = useParams();

  const [lawyer, setLawyer] = useState(null);

  useEffect(() => {
    if (Array.isArray(allLawyers)) {
      const found = allLawyers.find((lawyer) => lawyer.id === id);
      setLawyer(found);
    }
  }, [allLawyers, id]);

  if (!lawyer) {
    return <p className="text-center mt-20 text-xl">Loading lawyer details...</p>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white shadow-md mt-10 rounded">
      <img src={lawyer.image} alt={lawyer.name} className="w-32 h-32 object-cover rounded-full mx-auto" />
      <h2 className="text-2xl font-bold text-center mt-4">{lawyer.name}</h2>
      <p className="text-center text-gray-600">{lawyer.speciality}</p>
      <p className="text-center text-gray-600">{lawyer.experience}</p>
      <p className="text-center text-gray-600">License: {lawyer.licenseNumber}</p>
      <p className="text-center text-gray-600 mt-2">Fee: {lawyer.fee}</p>
      <p className="text-center text-gray-600">Contact: {lawyer.contact}</p>
    </div>
  );
};

export default LawyersDetails;
