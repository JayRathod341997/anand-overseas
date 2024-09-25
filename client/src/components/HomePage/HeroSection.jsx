import student_img from "../HomePage/students.jpeg";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="lg:flex flex-wrap items-center -mx-3">
        {/* LEFT  */}
        <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 flex justify-center items-center ">
          <div className="image-container animate-slide-in">
            <img src={student_img} alt="student" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:w-1/2 px-3">
          <h1
            className="text-xl sm:text-[40px] text-yocket-gold-900 font-bold sm:font-black tracking-[0.12px] sm:-tracking-[0.8px] leading-[130%] animate-slide-down"
            data-v-c5eb5cb1=""
          >
            Unlock Your <br />
            Study Abroad Journey <br />
            From GRE Prep to Visa!
          </h1>

          <p
            className="hidden sm:block mt-4 animate-fade-in-delay"
            data-v-c5eb5cb1=""
          >
            Explore thousands of programs, get matched with an advisor
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
