"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { ContactFormState } from "@/modules/Contact/@types/type";

const initialFormState: ContactFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Gagal mengirim pesan");
      }

      setStatus("success");
      setFormData(initialFormState);

      setTimeout(() => {
        setStatus("idle");
      }, 4000);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Terjadi kesalahan saat mengirim pesan.",
      );
    }
  };

  const isLoading = status === "loading";
  const isSuccess = status === "success";

  return (
    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6 w-full max-w-175 mx-auto">
      {/* Input group: name & email */}
      <div className="flex flex-col sm:flex-row gap-6 w-full">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          disabled={isLoading}
          className="input"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          disabled={isLoading}
          className="input"
        />
      </div>

      {/* Subject */}
      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        required
        disabled={isLoading}
        className="input"
      />

      {/* Message */}
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        required
        disabled={isLoading}
        className="textarea"
      />

      {/* Feedback Message */}
      {status === "success" && (
        <div className="flex items-center gap-x-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-4 py-3 rounded-lg text-sm transition-all duration-300">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <span>Pesan Anda berhasil dikirim! Saya akan segera membalasnya.</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-x-2 text-rose-400 bg-rose-500/10 border border-rose-500/30 px-4 py-3 rounded-lg text-sm transition-all duration-300">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Button */}
      <button
        type="submit"
        disabled={isLoading || isSuccess}
        className="btn rounded-full border border-white/50 max-w-40 p-2 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative cursor-pointer disabled:opacity-60"
      >
        <span
          className={`${isLoading || isSuccess ? "" : "group-hover:translate-y-[-120%] group-hover:opacity-0"} transition-all duration-500 font-semibold text-sm`}
        >
          {isLoading ? "Sending..." : isSuccess ? "Sent!" : "Let's talk"}
        </span>
        {!isLoading && !isSuccess && (
          <ArrowRight className="translate-y-[-120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] text-accent" />
        )}
      </button>
    </form>
  );
};

export default ContactForm;
