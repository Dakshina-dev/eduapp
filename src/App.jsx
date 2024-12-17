import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import PopularCategories from "./components/PopularCategories";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Getintouch from "./components/Getintouch";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Blog from "./Blog";
import Signin from "./components/Signin";
import Joinnow from "./components/Joinnow";
const App = () => {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<div><MainContent /><PopularCategories /></div>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/popularcategories" element={<PopularCategories />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/joinnow" element={<Joinnow />} />
      </Routes>
      <Getintouch />
      <Footer />
    </Router>
  );
};

export default App;
