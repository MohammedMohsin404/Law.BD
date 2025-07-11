import React, { useState } from "react";
import { useNavigate } from "react-router";

const ContactNow = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show modal first
    setShowModal(true);

    // Redirect to homepage after 2 seconds
    setTimeout(() => {
      setShowModal(false);
      navigate("/");
    }, 2000);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-[#f9f9f9]">
      <h2 className="text-4xl font-bold mb-6 text-[#0EA106]">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl p-6 bg-white rounded shadow space-y-5"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0EA106]"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0EA106]"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0EA106]"
        />
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0EA106]"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-[#0EA106] text-white py-2 rounded hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>

      {/* Thank You Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-md text-center">
            <h3 className="text-xl font-semibold text-[#0EA106] mb-2">Thank You!</h3>
            <p>Your message has been received. Redirecting to home...</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactNow;
