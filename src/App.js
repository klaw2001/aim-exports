import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage/>} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
