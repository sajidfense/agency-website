import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="w-screen text-black overflow-x-hidden">
      <Navbar />

      <section className="max-w-4xl mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="text-gray-700 mb-4 text-sm text-center">
          Last updated: March 2025
        </p>

        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>
            At SNJProjects, your privacy is important to us. This Privacy Policy
            outlines how we collect, use, and protect your information when you visit our website or use our services.
          </p>

          <h2 className="text-2xl font-semibold text-violet-700">1. Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide to us, including:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Contact details such as your name, email address, and phone number</li>
            <li>Business details for service inquiries or consultations</li>
            <li>Analytics data to help improve our website and user experience</li>
          </ul>

          <h2 className="text-2xl font-semibold text-violet-700">2. How We Use Your Information</h2>
          <p>
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Respond to inquiries and provide customer support</li>
            <li>Improve our website, services, and content</li>
            <li>Send updates, newsletters, or promotional materials (if you opt in)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-violet-700">3. Cookies & Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to monitor the activity on our website and store certain information. You can choose to disable cookies through your browser settings.
          </p>

          <h2 className="text-2xl font-semibold text-violet-700">4. Data Sharing & Security</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share data with trusted partners who help us operate our website or provide services to you. All data is stored securely using industry-standard protections.
          </p>

          <h2 className="text-2xl font-semibold text-violet-700">5. Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal information. You can contact us at any time to request these changes or ask questions about your data.
          </p>

          <h2 className="text-2xl font-semibold text-violet-700">6. Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. All changes will be posted on this page with the updated date.
          </p>

          <h2 className="text-2xl font-semibold text-violet-700">7. Contact Us</h2>
          <p>
            If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:
          </p>
          <p className="font-semibold">
            hello@snjprojects.com
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
