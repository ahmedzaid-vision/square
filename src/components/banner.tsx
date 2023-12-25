import {
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Banner = () => {
  return (
    <div
      className="bg-[#EFEFEF] text-[#005826] px-8"
      style={{
        backgroundImage: `url('public/hero.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto py-3 hidden md:flex justify-between items-center font-sans ">
        <div className="flex gap-7">
          <span className="flex items-center gap-2 font-semibold">
            <FaPhone /> +2 2633 5248  <span>  </span>   +2 0122 600 220 6
          </span>
          <span className="flex items-center gap-2 font-semibold">
            <FaEnvelope /> info@square-contracting.com
          </span>
        </div>
        <div className="flex space-x-12">
          <FaFacebookF className="text-xl" />
          <FaTwitter className="text-xl" />
          <FaLinkedinIn className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
