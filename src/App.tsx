import React from "react";
import Navbar from "./components/header/Navbar";
import Hero from "./components/hero/Hero";
import Category from "./components/category/Category";
import Features from "./components/features/Features";
import FeatureBreakFast from "./components/featuresBreakFast/FeatureBreakFast";
import Banner from "./components/banner/Banner";
import Blog from "./components/blog/Blog";
import NewsLetter from "./components/newsLetter/NewsLetter";
import Services from "./components/service/Services";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Category />
      <Features />
      <FeatureBreakFast />
      <Banner />
      <Blog/>
      <NewsLetter/>
      <Services/> 
      <Footer/>
    </main>
  );
};

export default App;
