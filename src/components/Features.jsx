import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef();

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.9)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, description, objectives, challenges, solution, siteLink, noFlip }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`bento-card ${noFlip ? "" : flipped ? "flipped" : ""}`}
      onMouseEnter={() => !noFlip && setFlipped(true)}
      onMouseLeave={() => !noFlip && setFlipped(false)}
    >
      <div id="casestudy" className="bento-card-inner"> 
        {/* Front Side */}
        <div className="bento-card-front">
          <video
            src={src}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
          <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
            <h1 className="bento-title special-font">{title}</h1>
            {description && <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>}
          </div>
        </div>

        {/* Back Side - Styled (Only for Flipping Cards) */}
        {!noFlip && (
          <div className="bento-card-back flex flex-col justify-between rounded-lg p-6 text-white bg-gradient-to-br from-[#141e30] to-[#243b55] backdrop-blur-md shadow-lg border border-white/10">
            <h2 className="text-xl font-bold tracking-wide uppercase">{title} - Case Study</h2>
            <div className="mt-4 space-y-4 text-left">
              <p className="text-sm">
                <span className="font-semibold text-blue-300">Objectives:</span> {objectives}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-red-300">Challenges:</span> {challenges}
              </p>
              <p className="text-sm">
                <span className="font-semibold text-green-300">Solution:</span> {solution}
              </p>
            </div>
            <a
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-blue-400"
            >
              Visit Project
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">Case Studies</p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Explore our success stories and see how we turn challenges into opportunities, delivering measurable success for our clients.
          </p>
        </div>

        {/* Bento Cards Grid */}
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
  src="videos/feature-6.mp4"
  title="CNW (Superbowl Campaign)"
  description="Engaging Super Bowl giveaway campaign driving product sales."
  objectives="To create an engaging marketing campaign for CNW, promoting their Super Bowl ticket giveaway while driving product sales through targeted video content and digital advertising."
  challenges={`Maximizing Campaign Engagement – Ensuring the giveaway stood out in a crowded promotional space. 
  Effective Video Content – Producing a high-quality short reel that would capture audience attention. 
  Targeted Advertising – Identifying and reaching the most relevant audience to drive conversions.`}
  solution={`Creative Content Production: 
  - Developed a dynamic short-form video featuring professional videographers and actors to create a compelling narrative around the giveaway.
  - Crafted a storyline that connected CNW’s products with the excitement of winning Super Bowl tickets. 
  Audience Research & Targeting: 
  - Conducted market research to identify the best demographics for CNW’s campaign.
  - Analyzed customer behavior and purchase trends to refine targeting strategy. 
  Strategic Digital Advertising: 
  - Used the short reel in paid ad campaigns on Facebook, Instagram, and TikTok to reach CNW’s ideal customers.
  - Optimized ad placements and formats for maximum engagement and conversions.
  - Utilized retargeting strategies to engage potential customers who interacted with the campaign but hadn't yet made a purchase.`}
/>


          </BentoTilt>

          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
  src="videos/feature-2.mp4"
  title="Warner Music Activation"
  description="High-impact activation campaigns for music artist launches."
  objectives="To develop high-impact activation campaigns for Warner Music artists launching new music, increasing brand awareness through immersive events and strategic social media marketing."
  challenges={`Capturing Audience Attention – Standing out in a competitive music industry with unique, memorable campaigns. 
  High-Quality Content Production – Creating engaging, shareable video content optimized for Instagram and TikTok. 
  Event Execution & Promotion – Organizing events that not only generate buzz but also drive social media engagement and music streams.`}
  solution={`Creative Event Activations: 
  - Designed immersive, artist-branded events to align with each music release.
  - Integrated interactive experiences to encourage audience participation and social sharing. 
  Content Creation & Marketing: 
  - Captured high-quality video content optimized for short-form platforms like TikTok and Instagram Reels.
  - Developed story-driven campaigns to highlight the artist’s journey and new music. 
  Social Media & Digital Strategy: 
  - Launched targeted ad campaigns to maximize event reach and engagement.
  - Partnered with influencers, fan communities, and content creators to amplify campaign visibility.
  - Leveraged trending challenges and viral formats to boost audience interaction.`}
  siteLink="https://warnermusic.com.au/"
/>

          </BentoTilt>

          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
  src="videos/feature-3.mp4"
  title="Azul Collective (Shopify)"
  description="Driving high-quality software development with technical expertise."
  objectives="Champion design and development standards while contributing to high-quality software development in a fast-paced, complex environment."
  challenges={`Ensuring Quality & Standards – Developing software that meets architectural and quality benchmarks. 
  Time Constraints – Working within tight timelines on complex projects requiring deep expertise. 
  Technical Support & Collaboration – Assisting team members and providing documentation for seamless implementation. 
  Research & Innovation – Staying updated with industry trends and suggesting new technologies. 
  Issue Resolution – Identifying, troubleshooting, and resolving application issues.`}
  solution={`Software Development & Testing: 
  - Developed software components adhering to team-approved quality and architectural standards.
  - Created unit tests, scripts, and test harnesses to ensure reliability.
  - Provided comprehensive software documentation for clarity and future reference. 
  Project Management & Collaboration: 
  - Worked on multiple projects, consulting and contributing expertise across teams.
  - Supported team members by assisting in software system implementation and case documentation.
  - Conducted wireframing and planning for technical design, coding, and testing services. 
  Research & Problem-Solving: 
  - Conducted industry research and analysis to introduce new technologies and methodologies.
  - Resolved application issues through structured analysis and troubleshooting.
  - Estimated timelines and resource requirements for technical design and development.`}
  siteLink="https://azulcollective.com.au"
/>


          </BentoTilt>

          <BentoTilt className="bento-tilt_2">
  <BentoCard
    src="videos/feature-4.mp4"
    title="Flappy Fish (ECommerce)"
    description="A revolutionary pet toy redefining the pet marketplace."
    objectives="Flappy Fish, an eCommerce store for pet supplies, aimed to establish a strong online presence and attract a loyal customer base in a highly competitive market."
    challenges={`Market Saturation – Competing with numerous established pet supply stores. 
    Customer Acquisition & Retention – Struggling to attract and retain customers. 
    Website Optimization – Creating a visually appealing and high-performing website to enhance user experience.`}
    solution={`Marketing Strategies: 
    - Implemented SEO and social media marketing to increase online visibility.
    - Used email marketing (Klaviyo) to engage customers with exclusive offers.
    - Ran targeted advertising campaigns on Facebook Ads and TikTok Ads to reach a broader audience. 
    Technology & Website Development: 
    - Built a user-friendly, visually appealing website using WordPress and Elementor.
    - Optimized for speed and performance to enhance user experience.
    - Integrated analytics tools to monitor website performance and customer behavior, enabling data-driven improvements.`}
    siteLink="https://flappy.fish"
  />
</BentoTilt>


          {/* Coming Soon Card - No Flip */}
          <BentoTilt className="bento-tilt_2">
            <div src="videos/feature-5.mp4" className="flex size-full flex-col justify-between bg-violet-200 p-5 rounded-lg shadow-lg text-black">
              <h1 className="bento-title special-font max-w-64">
                You're Next.
              </h1>
              <TiLocationArrow className="m-5 scale-[5] self-end text-violet-300" />
            </div>
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Features;
