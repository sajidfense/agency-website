// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Carousel from "./components/Carousel";
import Features from "./components/Features";
import BrandSlider from "./components/BrandSlider";
import Story from "./components/Story";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy"; 
import Packages from "./pages/Packages"; 

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Helmet>
        <title>SNJ Projects | Digital Marketing Redefined</title>
        <meta name="description" content="We help brands grow with modern digital marketing. From social media to web design, we're the creative agency redefining success." />
        <meta name="keywords" content="digital marketing, creative agency, web design, branding, SNJ Projects" />
        <link rel="canonical" href="https://snjprojects.com" />
        <meta property="og:title" content="SNJ Projects" />
        <meta property="og:description" content="We help brands grow with modern digital marketing." />
        <meta property="og:image" content="https://snjprojects.com/img/social-preview.jpg" />
        <meta property="og:url" content="https://snjprojects.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <About />
              <Carousel />
              <Features />
              <BrandSlider />
              <Story />
              <FAQ />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <>
              <Helmet>
                <title>Privacy Policy | SNJ Projects</title>
                <meta name="description" content="Read our privacy policy to understand how SNJ Projects collects, uses, and protects your information when you use our services." />
                <link rel="canonical" href="https://snjprojects.com/privacy-policy" />
              </Helmet>
              <PrivacyPolicy />
            </>
          }
        />
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </main>
  );
};

export default App;
