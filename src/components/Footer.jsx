import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const links = [
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://facebook.com", icon: <FaFacebook /> },
  { href: "https://linkedin.com", icon: <FaLinkedin /> },
];

const Footer = () => {
  return (
    <footer className="w-full bg-violet-100 border-t border-violet-300 py-6 text-black shadow-inner">
      <div id="footer" className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 md:flex-row">
        {/* Left - Copyright */}
        <p className="text-center text-sm md:text-left">
          &copy; SNJ Projects 2025. All Rights Reserved
        </p>

        {/* Middle - Social Links */}
        <div className="flex gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-violet-800 hover:text-violet-600 transition-colors duration-300"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Right - Privacy Link */}
        <Link
           to="/privacy-policy"
            className="text-center text-sm hover:underline md:text-right"
            >
            Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
