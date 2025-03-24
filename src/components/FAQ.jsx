import { useState } from "react";

const faqs = [
  {
    question: "What services does your digital marketing agency offer?",
    answer:
      "Our agency provides a full range of digital marketing services designed to help businesses grow their online presence and drive measurable results. These include web design and development, social media marketing, search engine optimization (SEO), paid advertising (Meta Ads, Google Ads, TikTok Ads), email and SMS marketing, content creation, and brand strategy. Whether you need a full-scale marketing solution or support in a specific area, our team builds custom strategies to meet your goals.",
  },
  {
    question: "How is your agency different from other marketing agencies?",
    answer:
      "We don’t believe in one-size-fits-all solutions. What sets us apart is our focus on combining creative storytelling with performance marketing to deliver campaigns that are not only visually engaging but also backed by data and strategy. We take the time to understand your brand, your industry, and your audience, so we can create campaigns that truly resonate. Our team stays agile, results-driven, and hands-on throughout every project, ensuring that you're always in the loop and seeing value at every step.",
  },
  {
    question: "Who do you typically work with?",
    answer:
      "We partner with a wide range of clients — from startups and small businesses looking to launch their brand online, to mid-sized companies and established enterprises seeking to scale their reach. Our portfolio includes brands in eCommerce, lifestyle, fashion, health and wellness, tech, and entertainment. Whether you're a founder looking for a full launch strategy or a marketing manager in need of a creative extension of your team, we adapt to your unique needs and industry landscape.",
  },
  {
    question: "Do you offer custom marketing packages for businesses?",
    answer:
      "Yes, we specialize in creating custom marketing packages tailored to each business’s needs, goals, and budget. We understand that no two businesses are the same, which is why we take a consultative approach — analyzing your current position, identifying growth opportunities, and building a personalized strategy that aligns with your objectives. From basic brand launches to comprehensive multi-channel campaigns, we offer flexible service tiers so you get exactly what you need.",
  },
  {
    question: "Can I hire your agency just for website design or social media management?",
    answer:
      "Absolutely. While we offer full-service digital marketing solutions, many of our clients choose us for specific services such as web design, social media management, or short-form video content. Whether you need a new Shopify site, help managing your Instagram and TikTok accounts, or just want a few high-converting landing pages, we can deliver focused support without requiring a full-service commitment.",
  },
  {
    question: "Where is your digital marketing agency located, and do you work with clients remotely?",
    answer:
      "Our agency is headquartered in Dubai, UAE, but we proudly work with clients from all over the world. We’re a remote-friendly team, which means all of our services — from strategy sessions to content creation and campaign management — can be delivered virtually. Whether you’re in the same city or across the globe, we have the systems and tools in place to ensure seamless collaboration and transparent communication.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="my-20 w-screen px-5 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold uppercase mb-6 text-blue-900 animate-fade-in">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 animate-fade-in delay-100">
          Find answers to the most common questions about our services.
        </p>
      </div>

      <div className="mt-10 max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md transition-all duration-300 bg-white animate-fade-in"
          >
            <button
              className="w-full flex justify-between items-center p-4 text-left text-lg font-medium text-gray-800 focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>
              <span
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-60 p-4" : "max-h-0 p-0"
              }`}
            >
              <p className="text-gray-700 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
