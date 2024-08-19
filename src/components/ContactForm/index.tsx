import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { toast } from "react-toastify";
import { Loader } from "@/components";
import Globe from "@/models/Globe";
import { OrbitControls } from "@react-three/drei";

const ContactForm = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => {
    setStart(true);
  };
  const handleBlur = () => {
    setStart(false);
  };

  console.log(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID, "env");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStart(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Simran",
          from_email: form.email,
          to_email: "simransia07@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_ID
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
          }, [3000]);
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
    <section className="relative text-white p-5 lg:w-10/12 mx-auto flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="text-xl p-5 my-4 font-bold md:text-4xl lg:text-6xl">
          Get in Touch
        </h1>

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
              rows="4"
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

      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas>
          {" "}
          <Suspense fallback={<Loader />}>
            {/* <directionalLight position={[0, 0, 1]} intensity={2.5} /> */}
            <ambientLight intensity={5} />
            {/* <pointLight position={[10, 10, 10]} intensity={10} /> */}
            {/* <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            /> */}
            {/* <hemisphereLight
              color="#F2D2BD"
              groundColor="#F2D2BD"
              intensity={2}
              position={[1, 1, 1]}
            /> */}
            <OrbitControls enableZoom={false} enablePan={true} />
            <Globe start={start} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default ContactForm;
