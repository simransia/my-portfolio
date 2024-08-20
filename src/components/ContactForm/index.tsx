import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Loader } from "@/components";
import Globe from "@/models/Globe";
import { OrbitControls } from "@react-three/drei";
import Link from "next/link";

const ContactLinks = () => {
  return (
    <div className="flex gap-6">
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/simran-chaurasia-003/"}
      >
        {" "}
        <svg
          className="sm:h-6 h-5 w-5 sm:w-6 hover:text-yellow-200 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {" "}
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
          <rect x="2" y="9" width="4" height="12" />{" "}
          <circle cx="4" cy="4" r="2" />
        </svg>
      </Link>
      <Link target="_blank" className="" href={"https://github.com/simransia"}>
        <svg
          className="sm:h-6 h-5 w-5 sm:w-6 hover:text-yellow-200 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.66-.22.66-.48v-1.7c-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.02-2.68-.1-.25-.44-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.62 9.62 0 0 1 12 6.8c.85 0 1.71.11 2.52.33 1.9-1.29 2.74-1.02 2.74-1.02.54 1.37.2 2.39.1 2.64.63.7 1.02 1.59 1.02 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.67.93.67 1.87v2.77c0 .27.15.59.67.48A10.01 10.01 0 0 0 22 12c0-5.52-4.48-10-10-10z" />
        </svg>
      </Link>
      <Link target="_blank" href={"https://x.com/simransia07"}>
        <svg
          className="sm:h-6 h-5 w-5 sm:w-6 hover:text-yellow-200 text-white"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
        </svg>
      </Link>
    </div>
  );
};

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => {
    setStart(true);
  };
  const handleBlur = () => {
    setStart(false);
  };

  console.log(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, "env");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStart(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID;
    const publicId = process.env.NEXT_PUBLIC_EMAIL_PUBLIC_ID;

    if (!serviceId || !templateId || !publicId) {
      console.error("Missing email service configuration");
      return;
    }

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Simran",
          from_email: form.email,
          to_email: "simransia07@gmail.com",
          message: form.message,
        },
        publicId
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfuly! Thank you😃");

          setTimeout(() => {
            setStart(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, 1000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setStart(false);

          toast.error(
            "I didn't receive your message 😢. Please try again later"
          );
        }
      );
  };

  return (
    <section className="relative text-white p-5 lg:w-10/12 mx-auto flex md:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        {" "}
        <h1 className="text-3xl p-5 my-4 font-bold md:text-4xl lg:text-6xl">
          Get in Touch
        </h1>
        <Canvas className="md:hidden">
          {" "}
          <Suspense fallback={<Loader isHome={false} />}>
            {/* <directionalLight position={[0, 0, 1]} intensity={2.5} /> */}
            <ambientLight intensity={5} />
            <OrbitControls enableZoom={false} enablePan={true} />
            <Globe start={start} isMobile={true} />
          </Suspense>
        </Canvas>
        <div className="mx-auto md:hidden mt-1">
          <ContactLinks />
        </div>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex p-5 flex-col gap-7"
        >
          <div className="flex flex-col gap-5 w-full">
            {" "}
            <label className="text-black-500 font-semibold">Your Name</label>
            <input
              type="text"
              name="name"
              className="w-full rounded-md bg-gray-800 bg-opacity-90 px-4 py-2 outline-none"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div className="flex flex-col gap-5 w-full">
            <label className="text-black-500 font-semibold">Your Email</label>
            <input
              type="email"
              name="email"
              className="w-full rounded-md bg-gray-800 bg-opacity-90 px-4 py-2 outline-none"
              placeholder="John@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>
          <div className="flex flex-col gap-5 w-full">
            <label className="text-black-500 font-semibold">Your Message</label>
            <textarea
              name="message"
              rows={4}
              className="w-full rounded-md bg-gray-800 bg-opacity-90 px-4 py-2 outline-none"
              placeholder="Write your thoughts here..."
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="rounded-md mt-4 bg-gradient-to-r text-gray-600 font-semibold text-lg w-full mx-auto py-2 from-amber-200 to-amber-400"
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>

      <div className="lg:w-1/2 relative w-full h-20 lg:h-auto md:h-[550px]">
        <Canvas className="hidden md:block">
          {" "}
          <Suspense fallback={<Loader isHome={false} />}>
            {/* <directionalLight position={[0, 0, 1]} intensity={2.5} /> */}
            <ambientLight intensity={5} />
            <OrbitControls enableZoom={false} enablePan={true} />
            <Globe start={start} />
          </Suspense>
        </Canvas>
        <div className="absolute hidden md:block left-1/2 -translate-x-1/2 bottom-10">
          <ContactLinks />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
