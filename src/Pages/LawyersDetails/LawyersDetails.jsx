import React, { useState, useEffect, useRef } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router";
import R from "../../assets/r.png";
import { setItemToStorage } from "../../Utilities/localstorage";

const LawyersDetails = () => {
  const navigate = useNavigate();
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
    return (
      <p className="text-center mt-20 text-xl">Loading lawyer details...</p>
    );
  }

  // Reusable Image with fallback support
  const ImageWithFallback = ({ src, alt, className }) => {
    const imgRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(src);
    const fallback =
      "https://img.icons8.com/?size=100&id=encwXCWAeHJe&format=png&color=000000";

    const handleLoad = () => {
      if (imgRef.current && imgRef.current.naturalWidth === 0) {
        setImgSrc(fallback);
      }
    };

    const handleError = () => {
      setImgSrc(fallback);
    };

     useEffect(() => {
        document.title=`${lawyer.name} | Qanun.BD`
    }, []);

    return (
      <img
        ref={imgRef}
        src={imgSrc}
        alt={alt}
        className={className}
        onLoad={handleLoad}
        onError={handleError}
      />
    );
  };

  const today = new Date();
  const today_day = today.toLocaleDateString("en-US", { weekday: "long" });

  const isToday_dayInArray = lawyer.availability.includes(today_day);

  const handleBook = (id, name) => {
    setItemToStorage(id, name);
    navigate("/bookings")
  };

  return (
    <section className="mt-[100px]">
    
      <h2 className="text-4xl  text-center font-bold text-[#0F0F0F]">
        Lawyer’s Profile Details
      </h2>
      <p className="text-center mt-8 ">
        Our platform connects you with verified, experienced Lawyers across
        various specialties — all at your convenience.
      </p>

      <div className="flex flex-col md:flex-row p-6 mt-24 items-center">
        {/* ✅ Use the fallback image component */}
        <ImageWithFallback
          className="w-64 h-64 object-cover"
          src={lawyer.image}
          alt={name}
        />

        <div className="ml-16 space-y-2 items-center align-middle">
          <div className="flex space-x-8">
            <p className="text-[#176AE5]">{lawyer.experience} Experience</p>
          </div>
          <h3 className="text-2xl font-bold">{lawyer.name}</h3>
          <div className=" flex space-x-8">
            <p className="text-[#0f0f0fa4] text-xl">
              {lawyer.speciality} Expert{" "}
            </p>
            <span className="text-[#0f0f0fa4] text-xl flex items-center">
              <img className="w-5 h-5 mr-1" src={R} alt="License" />
              License No: {lawyer.licenseNumber}
            </span>
          </div>
          <div className="space-x-8">
            {" "}
            Availability:{" "}
            {lawyer.availability.map((available) => (
              <button className="btn  btn-link text-warning ml-8">
                {available}
              </button>
            ))}
          </div>

          <div>
            Consultation Fee:{" "}
            <span className="text-[#0EA106]">Taka: {lawyer.fee}</span>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-2xl text-center">Book an Appointment</h3>
        <div className="flex justify-between">
          <p>Availability</p>
          {isToday_dayInArray ? (
            <p className="text-[#0EA106]">Lawyer Available Today</p>
          ) : (
            <p className="text-red-600">Lawyer Unavailable Today</p>
          )}
        </div>
        <div className="flex flex-col space-y-8">
          <p className="text-warning text-center">
            Due to high patient volume, we are currently accepting appointments
            for today only. We appreciate your understanding and cooperation.
          </p>
          {isToday_dayInArray && (
            <button
              onClick={() => handleBook(lawyer.id, lawyer.name)}
              className="btn bg-[#0EA106] text-white rounded-3xl flex"
            >
              Book Appointment Now
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default LawyersDetails;
