// src/components/contact/ContactSection.tsx
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section id="contactsection" className="relative bg-white rounded-xl shadow-sm p-6 mt-8 overflow-hidden section-spacing">
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="text-green-600 font-semibold">• Contact</p>
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
        <p className="text-gray-700 mb-6">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>

        <form className="space-y-4 text-green-300">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-600"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-600"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:outline-none focus:border-green-600"
            rows={4}
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
