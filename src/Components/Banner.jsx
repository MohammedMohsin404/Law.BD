import { Link } from "react-router";
import banner  from "../assets/banner-img-1.png"

const Banner = () => {
    return (
        <div
  className="hero min-h-[720px] rounded-3xl"
  style={{
    backgroundImage:
      `url(${banner})`,
  }}
>
  <div className="hero-overlay rounded-3xl opacity-10"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="space-y-8">
      <h1 className=" text-5xl font-bold font leading-[1.5] ">It avoids subjective claims or <br /> exaggeration that might raise red <br /> flags legally</h1>
      <p className="">
        Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a <br /> routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
      </p>
       <Link  className="btn text-white border-0 bg-[#0EA106] rounded-3xl text-xl p-6">Contact Now</Link>
    </div>
  </div>
</div>
    );
};

export default Banner;