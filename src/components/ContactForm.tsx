"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          message: "",
        });
        setStatus("idle");
      }, 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 60, damping: 18 }}
      className="space-y-8"
    >
      {/* Full Name */}
      <div>
        <label htmlFor="fullName" className="block text-sm font-semibold mb-2" style={{ color: "#000000" }}>
          Name
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          placeholder="Your full name"
          value={formData.fullName}
          onChange={handleChange}
          aria-describedby="fullName-error"
          className="w-full bg-transparent text-sm py-3 focus:outline-none"
          style={{
            color: "#000000",
            borderBottom: `1px solid ${errors.fullName ? "#ef4444" : "#d4d4d4"}`,
            transition: "border-color 200ms ease",
          }}
          onFocus={(e) => {
            if (!errors.fullName) e.currentTarget.style.borderBottomColor = "#fca311";
          }}
          onBlur={(e) => {
            if (!errors.fullName) e.currentTarget.style.borderBottomColor = "#d4d4d4";
          }}
        />
        {errors.fullName && (
          <p id="fullName-error" role="alert" className="text-sm text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Company Name */}
      <div>
        <label htmlFor="companyName" className="block text-sm font-semibold mb-2" style={{ color: "#000000" }}>
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Your company name"
          value={formData.companyName}
          onChange={handleChange}
          aria-describedby="companyName-error"
          className="w-full bg-transparent text-sm py-3 focus:outline-none"
          style={{
            color: "#000000",
            borderBottom: `1px solid ${errors.companyName ? "#ef4444" : "#d4d4d4"}`,
            transition: "border-color 200ms ease",
          }}
          onFocus={(e) => {
            if (!errors.companyName) e.currentTarget.style.borderBottomColor = "#fca311";
          }}
          onBlur={(e) => {
            if (!errors.companyName) e.currentTarget.style.borderBottomColor = "#d4d4d4";
          }}
        />
        {errors.companyName && (
          <p id="companyName-error" role="alert" className="text-sm text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.companyName}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: "#000000" }}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email address"
          value={formData.email}
          onChange={handleChange}
          aria-describedby="email-error"
          className="w-full bg-transparent text-sm py-3 focus:outline-none"
          style={{
            color: "#000000",
            borderBottom: `1px solid ${errors.email ? "#ef4444" : "#d4d4d4"}`,
            transition: "border-color 200ms ease",
          }}
          onFocus={(e) => {
            if (!errors.email) e.currentTarget.style.borderBottomColor = "#fca311";
          }}
          onBlur={(e) => {
            if (!errors.email) e.currentTarget.style.borderBottomColor = "#d4d4d4";
          }}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="text-sm text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: "#000000" }}>
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          aria-describedby="phone-error"
          className="w-full bg-transparent text-sm py-3 focus:outline-none"
          style={{
            color: "#000000",
            borderBottom: `1px solid ${errors.phone ? "#ef4444" : "#d4d4d4"}`,
            transition: "border-color 200ms ease",
          }}
          onFocus={(e) => {
            if (!errors.phone) e.currentTarget.style.borderBottomColor = "#fca311";
          }}
          onBlur={(e) => {
            if (!errors.phone) e.currentTarget.style.borderBottomColor = "#d4d4d4";
          }}
        />
        {errors.phone && (
          <p id="phone-error" role="alert" className="text-sm text-red-500 mt-1 flex items-center gap-1">
            <AlertCircle size={14} />
            {errors.phone}
          </p>
        )}
      </div>

      {/* How can we help you? */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: "#000000" }}>
          How can we help you?
        </label>
        <input
          type="text"
          id="message"
          name="message"
          placeholder="What's in your mind?"
          value={formData.message}
          onChange={handleChange}
          className="w-full bg-transparent text-sm py-3 focus:outline-none"
          style={{
            color: "#000000",
            borderBottom: "1px solid #d4d4d4",
            transition: "border-color 200ms ease",
          }}
          onFocus={(e) => {
            e.currentTarget.style.borderBottomColor = "#fca311";
          }}
          onBlur={(e) => {
            e.currentTarget.style.borderBottomColor = "#d4d4d4";
          }}
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting" || status === "success"}
          className={cn(
            "relative overflow-hidden px-8 py-3 rounded-full text-base font-semibold border-none",
            "transition-[transform,box-shadow,background-color,opacity] duration-200 ease-out",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-actrivo/50 focus-visible:ring-offset-2",
            status === "success"
              ? "bg-emerald-500 text-white cursor-not-allowed"
              : "bg-actrivo text-primary-foreground",
            status === "submitting" && "opacity-70 cursor-not-allowed",
            status === "idle" && [
              "cursor-pointer",
              "hover:scale-[1.03] hover:shadow-[0_4px_16px_rgba(252,163,17,0.3)]",
              "active:scale-[0.98]",
              "btn-shine",
            ],
            status === "error" && "cursor-pointer"
          )}
        >
          <span className="relative z-10">
            {status === "submitting" && "Submitting..."}
            {status === "success" && (
              <span className="flex items-center justify-center gap-2">
                <CheckCircle2 size={20} />
                Submitted!
              </span>
            )}
            {status === "idle" && "Submit"}
            {status === "error" && "Try Again"}
          </span>
        </button>
      </div>

      {/* Success Message */}
      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm"
          style={{ color: "#10b981" }}
        >
          Thanks! We&apos;ll be in touch within 24 hours.
        </motion.p>
      )}
    </motion.form>
  );
}
