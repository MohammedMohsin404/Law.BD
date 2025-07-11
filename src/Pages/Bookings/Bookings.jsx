import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router"; // fixed incorrect import
import Appointments from "../../Components/Appointments"; // This must be the correct card component
import { getItemToStorage } from "../../Utilities/localstorage";


import ConeFeeChart from "../../Components/ConeFeeChart";

const Bookings = () => {

   useEffect(() => {
        document.title="Appointments | Qanun.BD"
    }, []);

  const allLawyers = useLoaderData();
  const [lawyersInfo, setLawyersInfo] = useState([]);
  const handleRemove = (id) => {
    setLawyersInfo((prev) => prev.filter((lawyer) => lawyer.id !== id));
  };

  useEffect(() => {
    const storedIds = getItemToStorage();

    // Filter based on storedIds
    const matchedLawyers = allLawyers.filter((lawyer) =>
      storedIds.includes(lawyer.id)
    );

    setLawyersInfo(matchedLawyers);
  }, [allLawyers]);

 

  

  return (
    <section className="mt-16 my-4">
     
      <div className="mt-12 w-full h-[400px]">
        <h2 className="text-2xl font-semibold text-center text-[#0EA106] mb-6">
          📊 Appointment Fee Summary
        </h2>
        <ConeFeeChart data={lawyersInfo} />
      </div>

      <h2 className="text-center mt-[100px] text-4xl font-bold">
        My Today's Appointments
      </h2>
      <p className="text-center mt-4">
        Our platform connects you with verified, experienced lawyers across
        various specialties — all at your convenience.
      </p>

      {lawyersInfo.length > 0 ? (
        lawyersInfo.map((lawyer, i) => (
          <Appointments key={i} lawyer={lawyer} onRemove={handleRemove} />
        ))
      ) : (
        <p className="text-center mt-10 text-xl text-gray-500">
          No appointments found.
        </p>
      )}
    </section>
  );
};

export default Bookings;
