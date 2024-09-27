import student_img from "../HomePage/students.jpeg";
import styles from "./HeroSection.module.css";
import CountUp from "react-countup";
const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className="lg:flex flex-wrap items-center -mx-3">
        {/* LEFT */}
        <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 flex justify-center items-center ">
          <div className={styles.imageContainer}>
            <img src={student_img} alt="student" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="lg:w-1/2 px-3">
          <h1
            className={`text-xl sm:text-[40px] text-yocket-gold-900 font-bold sm:font-black tracking-[0.12px] sm:-tracking-[0.8px] leading-[130%] ${styles.animateSlideDown}`}
          >
            Unlock Your <br />
            Study Abroad Journey <br />
            From GRE Prep to Visa!
          </h1>

          <p
            className={`hidden sm:block mt-4 ${styles.animateFadeInDelay}`}
            style={{ display: "flex", justifyContent: "center" }}
          >
            Explore thousands of programs, get matched with an advisor !
          </p>
          <p></p>
          <div>
            <div className={`${styles.flexCenter} ${styles.stats}`}>
              <div className={`${styles.flexColStart} ${styles.stat}`}>
                <span>
                  <CountUp start={8850} end={8876} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Premium Products</span>
              </div>
              <div className={`${styles.flexColStart} ${styles.stat}`}>
                <span>
                  <CountUp start={5360} end={5468} duration={4} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Happy Customers</span>
              </div>
              <div className={`${styles.flexColStart} ${styles.stat}`}>
                <span>
                  <CountUp end={7} />
                  <span>+</span>
                </span>
                <span className="secondaryText">Award Winning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
