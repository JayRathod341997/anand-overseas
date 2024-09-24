import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import BlogPage from "./components/BlogPage/BlogPage";
import ContactPage from "./components/ContactUsPage/ContactPage";
import Testimonial from "./components/TestimonialPage/Testimonial";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/testimonial" element={<Testimonial />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
