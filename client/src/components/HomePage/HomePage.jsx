import ContactForm from "./ContactPage/ContactForm";
import HeroSection from "./HeroSection";
// import ScoreCard from "./ScoreCard/ScoreCard";
import SuccessStories from "./SuccessStories/SuccessStories";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      {/* <ScoreCard /> */}
      <SuccessStories />
      <ContactForm />
    </>
  );
};

export default HomePage;
