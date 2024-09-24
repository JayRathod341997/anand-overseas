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
        <NavLink to="/" exact activeClassName={classes.activeLink}>
          <HomeIcon />
          Home
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
          <ArticleIcon />
          Blog
        </NavLink>
        <NavLink to="/testimonial" activeClassName={classes.activeLink}>
          <QuestionAnswerIcon />
          Testimonials
        </NavLink>
        <NavLink to="/contact" activeClassName={classes.activeLink}>
          <ContactMailIcon />
          Contact Us
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
