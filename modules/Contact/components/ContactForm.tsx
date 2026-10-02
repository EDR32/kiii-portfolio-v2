"use client";

import { useState, FormEvent } from "react";
import { BsArrowRight } from "react-icons/bs";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-1 flex flex-col gap-6 w-full max-w-[700px] mx-auto"
    >
      {/* Input group: name & email */}
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        <input
          type="text"
          placeholder="Name"
          required
          className="input"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="input"
        />
      </div>
      {/* Subject */}
      <input
        type="text"
        placeholder="Subject"
        required
        className="input"
      />
      {/* Message */}
      <textarea
        placeholder="Message"
        required
        className="textarea"
      />

      {/* Button */}
      <button
        type="submit"
        disabled={loading}
        className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative cursor-pointer"
      >
        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-semibold text-sm">
          {loading ? "Sending..." : submitted ? "Sent!" : "Let's talk"}
        </span>
        <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] text-accent" />
      </button>
    </form>
  );
};

export default ContactForm;
