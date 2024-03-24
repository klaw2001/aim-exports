import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/AboutPage";
import GalleryPage from "./pages/GalleryPage";
import BlogPage from "./pages/BlogPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage/>} />
          <Route path="/gallery" element={<GalleryPage/>} />
          <Route path="/blog" element={<BlogPage/>} />
          <Route path="/services" element={<ServicesPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
