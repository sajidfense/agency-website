import { useState, useRef, useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Helmet } from "react-helmet";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const currentVideoRef = useRef(null);

  // Detect Mobile Device
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
        setIsLoading(false); // skip video loading on mobile
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedVideos >= totalVideos - 1 && !isMobile) {
      setIsLoading(false);
    }

    // Fallback timeout for safety (just in case)
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 8000);

    return () => clearTimeout(timeout);
  }, [loadedVideos, isMobile]);

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
    nextVideoRef.current?.play().catch(() => {});
  };

  useGSAP(() => {
    if (hasClicked && !isMobile) {
      gsap.set("#next-video", { visibility: "visible" });

      gsap.to("#next-video", {
        transformOrigin: "center center",
        scale: 1,
        width: "100%",
        height: "100%",
        duration: 1,
        ease: "power1.inOut",
        onStart: () => nextVideoRef.current?.play(),
      });

      gsap.from("#current-video", {
        transformOrigin: "center center",
        scale: 0,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }
  }, [currentIndex]);

  useGSAP(() => {
    if (!isMobile) {
      gsap.set("#video-frame", {
        clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
        borderRadius: "0 0 40% 10%",
      });

      gsap.from("#video-frame", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        borderRadius: "0 0 0 0",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#video-frame",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      });
    }
  });

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <section className="relative h-dvh w-screen overflow-x-hidden">
      <Helmet>
        <title>SNJ Projects | Digital Marketing Redefined</title>
        <meta name="description" content="We help brands grow with modern digital marketing. From social media to web design, we're the creative agency redefining success." />
        <meta name="keywords" content="digital marketing, creative agency, web design, branding, SNJ Projects" />
        <link rel="canonical" href="https://snjprojects.com" />
        <meta property="og:title" content="SNJ Projects" />
        <meta property="og:description" content="We help brands grow with modern digital marketing." />
        <meta property="og:image" content="https://snjprojects.com/img/social-preview.jpg" />
        <meta property="og:url" content="https://snjprojects.com" />
      </Helmet>

      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-100">
        {!isMobile ? (
          <>
            <div className="absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
              <div
                onClick={handleMiniVdClick}
                className="cursor-pointer origin-center scale-70 opacity-50 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
              >
                <video
                  ref={nextVideoRef}
                  src={getVideoSrc(upcomingVideoIndex)}
                  loop
                  muted
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-center"
                  onLoadedData={handleVideoLoad}
                />
              </div>
            </div>

            <video
              ref={nextVideoRef}
              src={getVideoSrc(currentIndex)}
              loop
              muted
              id="next-video"
              className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
              onLoadedData={handleVideoLoad}
            />

            <video
              ref={currentVideoRef}
              src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
              autoPlay
              loop
              muted
              className="absolute left-0 top-0 w-full h-full object-cover object-center"
              onLoadedData={handleVideoLoad}
            />
          </>
        ) : (
          <img
            src="/img/mobile-fallback.jpg"
            alt="SNJ Projects"
            className="w-full h-full object-cover object-center"
          />
        )}

        {/* Text and CTA */}
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-100">Marketing</h1>

        <div className="absolute left-0 top-0 z-40 w-full h-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">Redefined</h1>
            <p className="mb-5 max-w-md text-blue-100">
              Marketing That Speaks. Campaigns That Convert
            </p>
            <a href="#footer">
              <Button
                id="contact"
                title="SCALE ME!"
                leftIcon={<TiLocationArrow />}
                containerClass="!bg-yellow-300 flex items-center gap-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
