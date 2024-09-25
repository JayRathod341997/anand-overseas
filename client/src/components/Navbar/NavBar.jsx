import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ContactMailIcon from "@mui/icons-material/ContactMail";
const Navbar = () => {
  return (
    <div className={classes.navbar}>
      {/* Left side - Logo */}
      <NavLink to="/">
        <div className={classes.logoContainer}>
          <img src="src/assets/logo.jpg" className={classes.logo} alt="Logo" />
        </div>
      </NavLink>

      {/* Right side - Links */}
      <div className={classes.navLinks}>
        <NavLink
          to="/"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#007bff" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          exact
          activeClassName={classes.activeLink}
        >
          <div className={classes.navIconTextStyle}>
            <HomeIcon />
            Home
          </div>
        </NavLink>
        <NavLink
          to="/blog"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#007bff" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
        >
          <div className={classes.navIconTextStyle}>
            <ArticleIcon />
            Blog
          </div>
        </NavLink>
        <NavLink
          to="/testimonial"
          style={({ isActive, isTransitioning }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive ? "#007bff" : "black",
              viewTransitionName: isTransitioning ? "slide" : "",
            };
          }}
          activeClassName={classes.activeLink}
        >
          <div className={classes.navIconTextStyle}>
            <QuestionAnswerIcon />
            Testimonials
          </div>
        </NavLink>
        <NavLink to="/contact" activeClassName={classes.activeLink}>
          <div className={classes.navIconTextStyle}>
            <ContactMailIcon />
            Contact Us
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
