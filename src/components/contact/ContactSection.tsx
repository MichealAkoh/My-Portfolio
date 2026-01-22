// src/components/contact/ContactSection.tsx
"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setLoading(true);

    // Access environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey).then(
      () => {
        setLoading(false);
        toast.success("Message sent successfully!");
        formRef.current?.reset();
      },
      (error) => {
        setLoading(false);
        console.error(error);
        toast.error("Failed to send message. Please try again.");
      },
    );
  };

  return (
    <section
      id="contactsection"
      className="relative bg-white rounded-xl shadow-sm p-6 mt-8 overflow-hidden section-spacing"
    >
      <Toaster position="top-center" reverseOrder={false} />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="text-green-600 font-semibold">• Contact</p>
        <h2 className="text-3xl font-bold mb-4">Let&apos;s Work Together</h2>
        <p className="text-gray-700 mb-6">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="space-y-4 text-left"
        >
          <input
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            className="w-full p-3 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-green-600 transition-colors"
          />
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="w-full p-3 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-green-600 transition-colors"
          />
          <textarea
            name="message"
            required
            placeholder="Your Message"
            className="w-full p-3 border-2 border-gray-100 rounded-lg focus:outline-none focus:border-green-600 transition-colors"
            rows={4}
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full px-6 py-3 text-white rounded-lg shadow transition duration-300 flex items-center justify-center
              ${loading ? "bg-green-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}
            `}
          >
            {loading ? (
              <span className="flex items-center gap-2">Sending...</span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
