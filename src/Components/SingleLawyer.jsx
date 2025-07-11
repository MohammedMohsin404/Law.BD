import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router"; // ✅ Fixed wrong import
import R from "../assets/r.png";


// Reusable Image with fallback support
const ImageWithFallback = ({ src, alt, className }) => {
  const imgRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(src);
  const fallback = "https://img.icons8.com/?size=100&id=encwXCWAeHJe&format=png&color=000000";

  const handleLoad = () => {
    if (imgRef.current && imgRef.current.naturalWidth === 0) {
      setImgSrc(fallback);
    }
  };

  const handleError = () => {
    setImgSrc(fallback);
  };
   useEffect(() => {
          document.title="Our Lawyers | Qanun.BD"
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

const SingleLawyer = ({ lawyer }) => {
  const { id, image, name, licenseNumber, experience, speciality, availability } = lawyer;
  const today = new Date();
  const today_day = today.toLocaleDateString("en-US", { weekday: "long" });

  const isToday_dayInArray = availability.includes(today_day);
  return (
    <div className="flex border border-[#0f0f0f41] p-6 ">
    
    
      {/* ✅ Use the fallback image component */}
      <ImageWithFallback className="w-32 h-32 object-cover" src={image} alt={name} />

      <div className="ml-16 space-y-2">
        <div className="flex space-x-8">
          {isToday_dayInArray?<p className="text-[#09982F]">Available</p>:<p className="text-red-600">Unavailable</p>}
          <p className="text-[#176AE5]">{experience}</p>
        </div>
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-[#0f0f0fa4] text-xl">{speciality}</p>
        <span className="text-[#0f0f0fa4] text-xl flex items-center">
          <img className="w-5 h-5 mr-1" src={R} alt="License" />
          License No: {licenseNumber}
        </span>
         <Link to={`/lawyer/${id}`} className="text-[#176AE5]">View Details</Link>
      </div>
    </div>
  );
};

export default SingleLawyer;
