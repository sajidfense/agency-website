// src/components/Carousel.jsx
import { useEffect, useRef, useState } from "react";
import "./carousel.css";
import AnimatedTitle from "./AnimatedTitle";

const items = [
  {
    image: "/img/img1.png",
    subtitle: "Web Design & Development",
    description: "Create visually stunning, user-friendly websites optimized for performance, mobile responsiveness, and conversion.",
    details: "Includes: WordPress/Shopify/Webflow sites, landing pages, UX/UI design, SEO setup.",
  },
  {
    image: "/img/img2.png",
    subtitle: "Social Media Marketing & Management",
    description: "Grow brand presence and engagement across Instagram, TikTok, Facebook, and LinkedIn.",
    details: "Includes: Content creation, strategy, community management, and performance reporting.",
  },
  {
    image: "/img/img3.png",
    subtitle: "Paid Advertising (PPC & Social Ads)",
    description: "Drive targeted traffic and conversions through performance-driven ad campaigns.",
    details: "Includes: Meta Ads, TikTok Ads, Google Ads, YouTube Ads, A/B testing, retargeting.",
  },
  {
    image: "/img/img4.png",
    subtitle: "Content Creation & Short-Form Video",
    description: "Produce scroll-stopping content that builds brand awareness and drives engagement.",
    details: "Includes: Reels, TikToks, YouTube Shorts, UGC-style content, photography, and scripting.",
  },
  {
    image: "/img/img5.png",
    subtitle: "Email & SMS Marketing",
    description: "Nurture leads and convert customers with personalized, automated campaigns.",
    details: "Includes: Klaviyo, Mailchimp, and SMS platforms; flows, campaigns, segmentation.",
  },
  {
    image: "/img/img6.png",
    subtitle: "Brand Strategy & Identity Design",
    description: "Help brands find their voice, define their look, and create meaningful connections with their audience.",
    details: "Includes: Logo design, brand guidelines, messaging strategy, competitor research.",
  },
];

const Carousel = () => {
  const carouselRef = useRef(null);
  const [carouselClass, setCarouselClass] = useState("carousel");
  const [showDetail, setShowDetail] = useState(false);

  const next = () => {
    if (showDetail) return;
    const carousel = carouselRef.current;
    setCarouselClass("carousel next");
    const list = carousel.querySelector(".list");
    list.appendChild(list.children[0]);
    setTimeout(() => setCarouselClass("carousel"), 2000);
  };

  const prev = () => {
    if (showDetail) return;
    const carousel = carouselRef.current;
    setCarouselClass("carousel prev");
    const list = carousel.querySelector(".list");
    list.prepend(list.children[list.children.length - 1]);
    setTimeout(() => setCarouselClass("carousel"), 2000);
  };

  const seeMore = () => setShowDetail(true);
  const back = () => setShowDetail(false);

  return (
    <section id="services" className="py-24 relative pt-2 md:pt-12 pb-8 md:pb-16 px-4 sm:px-6">
      <AnimatedTitle
        title="Services We Provide"
        containerClass="mt-2 !text-black text-center"
      />
      <div
        className={`${carouselClass}${showDetail ? " showDetail" : ""} -mt-16 rounded-2xl shadow-xl`}
        ref={carouselRef}
      >
        <div className="list">
          {items.map((item, i) => (
            <div className="item" key={i}>
              <img src={item.image} alt="" />
              <div className="introduce">
                <div className="title">{item.title}</div>
                <div className="topic">{item.subtitle}</div>
                <div className="des">{item.description}</div>
                <button className="seeMore" onClick={seeMore}>
                  SEE MORE ↗
                </button>
              </div>
              <div className="detail">
                <div className="title">{item.subtitle}</div>
                <div className="des">{item.details}</div>
                {/* <div className="specifications">
                  <div>
                    <p>Completion Time</p>
                    <p>6 hours</p>
                  </div>
                  <div>
                    <p>Charging port</p>
                    <p>Type-C</p>
                  </div>
                  <div>
                    <p>Compatible</p>
                    <p>Android</p>
                  </div>
                  <div>
                    <p>Bluetooth</p>
                    <p>5.3</p>
                  </div>
                  <div>
                    <p>Controlled</p>
                    <p>Touch</p>
                  </div>
                </div> */}
                <div className="checkout">
                  <button
                    className="bg-indigo-600 text-white px-4 py-2 font-medium tracking-widest"
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    More Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button id="prev" onClick={prev}>
            &lt;
          </button>
          <button id="next" onClick={next}>
            &gt;
          </button>
          <button id="back" onClick={back}>
            See All ↗
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
