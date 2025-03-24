// src/pages/Packages.jsx
import { useRef, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet";

<Helmet>
  <title>Agency Service Packages | SNJ Projects</title>
  <meta name="description" content="Explore our marketing packages designed to help brands grow — from startups to enterprises. Choose from Ignite, Amplify, and Dominate." />
  <meta name="keywords" content="marketing packages, branding, digital agency, social media, web development, SNJ Projects" />
  <link rel="canonical" href="https://snjprojects.com/packages" />
</Helmet>


gsap.registerPlugin(ScrollTrigger);

const Packages = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const contactRef = useRef(null);

  const handleLearnMoreClick = () => {
    setShowContactForm(true);
    setTimeout(() => {
      contactRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  
    gsap.utils.toArray(".package-block").forEach((block) => {
      gsap.fromTo(
        block,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power1.out",
          scrollTrigger: {
            trigger: block,
            start: "top 85%",
            toggleActions: "play none none none",
            // markers: true, // ← uncomment to debug
          },
        }
      );
    });
  
    ScrollTrigger.refresh();
  }, []);
  

  return (
    <div className="w-screen overflow-x-hidden text-black">
      <Navbar />

      <section id="packages" className="py-24 px-4 sm:px-10 max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-10">🧩 Agency Service Packages</h2>

        {/* Starter Package */}
        <div className="package-block mb-16 border-l-4 border-violet-500 pl-6">
          <h3 className="text-2xl font-semibold text-violet-700">🔹 Starter Package – “Ignite”</h3>
          <p className="mt-2 mb-4 text-gray-700 italic">Perfect for new brands or small businesses looking to establish a digital presence.</p>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>✅ Brand Strategy Session (1 hour)</li>
            <li>✅ Logo & Brand Identity (basic kit)</li>
            <li>✅ Social Media Setup – Instagram, Facebook, TikTok</li>
            <li>✅ 8 Branded Social Media Posts / month</li>
            <li>✅ 1 Short-Form Video (Reel or TikTok) / month</li>
            <li>✅ Basic Website or Landing Page (WordPress or Shopify)</li>
            <li>✅ Monthly Performance Report</li>
          </ul>
          {/* <p className="mt-4 font-bold text-violet-700">💸 Investment: $1,500 – $2,500/month</p> */}
          <button
            onClick={handleLearnMoreClick}
            className="inline-block mt-4 px-5 py-2 bg-violet-600 text-white font-semibold rounded hover:bg-violet-700 transition"
          >
            Learn More
          </button>
        </div>

        {/* Growth Package */}
        <div className="package-block mb-16 border-l-4 border-blue-500 pl-6">
          <h3 className="text-2xl font-semibold text-blue-700">🔸 Growth Package – “Amplify”</h3>
          <p className="mt-2 mb-4 text-gray-700 italic">Ideal for businesses ready to scale their reach and increase conversions.</p>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>✅ Brand Refresh or Full Identity Package</li>
            <li>✅ Content Strategy & Monthly Calendar</li>
            <li>✅ 12–16 Branded Social Posts / month</li>
            <li>✅ 3 Short-Form Videos (Reels/TikToks) / month</li>
            <li>✅ Ad Campaign Management – Meta, TikTok, or Google</li>
            <li>✅ Email Marketing – 2 campaigns/month (Klaviyo or Mailchimp)</li>
            <li>✅ Website Optimization & CRO Recommendations</li>
            <li>✅ Bi-Weekly Strategy Calls</li>
            <li>✅ Monthly Analytics & Insights Report</li>
          </ul>
          {/* <p className="mt-4 font-bold text-blue-700">💸 Investment: $3,500 – $5,000/month</p> */}
          <button
            onClick={handleLearnMoreClick}
            className="inline-block mt-4 px-5 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
          >
            Learn More
          </button>
        </div>

        {/* Premium Package */}
        <div className="package-block mb-16 border-l-4 border-yellow-500 pl-6">
          <h3 className="text-2xl font-semibold text-yellow-600">🔶 Premium Package – “Dominate”</h3>
          <p className="mt-2 mb-4 text-gray-700 italic">Built for brands that want full-service creative and performance marketing support.</p>
          <ul className="list-disc list-inside text-gray-800 space-y-1">
            <li>✅ Full Brand Strategy & Market Research</li>
            <li>✅ Social Media Management (Content + Engagement)</li>
            <li>✅ 5+ Short-Form Videos / month (Scripted + Edited)</li>
            <li>✅ Influencer/UGC Strategy & Outreach</li>
            <li>✅ Multi-Platform Ads – Meta, TikTok, Google, YouTube</li>
            <li>✅ Email & SMS Marketing – Automations + Campaigns</li>
            <li>✅ Custom Landing Pages / Funnel Builds</li>
            <li>✅ Real-Time Analytics Dashboard</li>
            <li>✅ Weekly Strategy Meetings & Quarterly Reviews</li>
          </ul>
          {/* <p className="mt-4 font-bold text-yellow-600">💸 Investment: $7,500 – $12,000/month</p> */}
          <button
            onClick={handleLearnMoreClick}
            className="inline-block mt-4 px-5 py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 transition"
          >
            Learn More
          </button>
        </div>
      </section>

      {showContactForm && (
        <div ref={contactRef}>
          <Contact hideCTA />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Packages;
