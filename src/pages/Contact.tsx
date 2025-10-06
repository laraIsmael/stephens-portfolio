import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const result = await emailjs.sendForm(
        "YOUR_SERVICE_ID", // replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS Template ID
        form.current,
        "YOUR_PUBLIC_KEY" // replace with your EmailJS Public Key
      );
      console.log("EmailJS result:", result);

      setLoading(false);
      setStatus("success");
      form.current.reset();
    } catch (err: unknown) {
      console.error("EmailJS error:", err);
      setLoading(false);
      setStatus("error");
      if (err instanceof Error) {
        setErrorMessage(err.message);
      } else if (typeof err === "object" && err !== null && "text" in err) {
        setErrorMessage((err as { text?: string }).text || "Unknown error");
      } else {
        setErrorMessage("Unknown error");
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 px-6 py-16 flex flex-col items-center">
      {/* Heading */}
      <div className="text-center mb-12 max-w-3xl">
        <h2 className="text-4xl font-extrabold text-teal-900 tracking-tight mb-4">
          Let’s Connect
        </h2>

        {/* Contact Info */}
        <div className="w-full max-w-4xl mx-auto flex justify-center gap-12 py-6">
          <a
            href="mailto:stephenlw@mac.com"
            className="text-teal-700 hover:text-teal-900 transition-colors"
            aria-label="Email"
          >
            <HiOutlineMail className="w-8 h-8" />
          </a>

          <a
            href="https://www.linkedin.com/in/stephen-wilson/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-700 hover:text-teal-900 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
        </div>

        <p className="text-lg text-teal-700">
          Feel free to reach out! I’d love to hear from you.
          <br />
          I’m happy to discuss engineering projects, collaborations, or answer
          any questions.
        </p>
      </div>
      Contact Form
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg mb-16">
        {status === "success" && (
          <p className="text-green-600 text-center mb-4">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mb-4">
            Failed to send message: {errorMessage}
          </p>
        )}

        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="w-full border border-teal-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            className="w-full border border-teal-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-700"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full border border-teal-500 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-700"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-600 text-white font-medium py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
