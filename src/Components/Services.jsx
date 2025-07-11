import total_lawyer from "../assets/success-doctor.png";
import total_reviews from "../assets/success-review.png";
import total_initiated from "../assets/success-patients.png";
import total_stuff from "../assets/success-staffs.png";
import CountUp from "react-countup";
import { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    document.title = "Services | Qanun.BD";
  }, []);
  return (
    <section className="mt-[100px]">
      <h2 className="text-4xl  text-center font-bold text-[#0F0F0F]">
        We Provide Best Law Services
      </h2>
      <p className="text-center mt-8 ">
        Our platform connects you with verified, experienced Lawyers across
        various specialities — all at your convenience.{" "}
      </p>
      <div className="mt-8 grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:grid-cols-2 gap-4 ">
        <div className=" border border-[#0f0f0f44] p-8 gap-y-5 rounded-3xl place-items-center  ">
          <img src={total_lawyer} className="" alt="" />
          <h1 className="text-[#0F0F0F] text-5xl font-bold mt-5">
            {" "}
            <CountUp start={0} end={199} duration={10}>
              {" "}
            </CountUp>{" "}
            +
          </h1>
          <p className="mt-5 text-[#0f0f0f96]"> Total Lawyer</p>
        </div>

        <div className=" border border-[#0f0f0f44] p-8 gap-y-5 rounded-3xl place-items-center ">
          <img src={total_reviews} className="" alt="" />
          <h1 className="text-[#0F0F0F] text-5xl font-bold mt-5">
            <CountUp start={0} end={467} duration={10}>
              {" "}
            </CountUp>{" "}
            +
          </h1>
          <p className="mt-5 text-[#0f0f0f96]"> Total Lawyer</p>
        </div>

        <div className=" border border-[#0f0f0f44] p-8 gap-y-5 rounded-3xl place-items-center">
          <img src={total_initiated} className="" alt="" />
          <h1 className="text-[#0F0F0F] text-5xl font-bold mt-5">
            <CountUp start={0} end={1900} duration={10}>
              {" "}
            </CountUp>{" "}
            +
          </h1>
          <p className="mt-5 text-[#0f0f0f96]"> Total Lawyer</p>
        </div>

        <div className=" border border-[#0f0f0f44] p-8 gap-y-5 rounded-3xl place-items-center">
          <img src={total_stuff} className="" alt="" />
          <h1 className="text-[#0F0F0F] text-5xl font-bold mt-5">
            <CountUp start={0} end={300} duration={10}>
              {" "}
            </CountUp>{" "}
            +
          </h1>
          <p className="mt-5 text-[#0f0f0f96]"> Total Lawyer</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
