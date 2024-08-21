import { Fragment, useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import audioFile from "@/assets/audio/audio.mp3";

const Music = () => (
  <svg
    className="sm:h-6 h-5 w-5 sm:w-6 text-white width-pulse"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 17V5l12-2v12" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);

const MusicOff = () => (
  <svg
    className="sm:h-6 h-5 w-5 sm:w-6 text-white width-pulse"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 17V5l12-2v12" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
    <line x1="4" y1="4" x2="20" y2="20" />
  </svg>
);

const App = ({ Component, pageProps }: AppProps) => {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((error) => console.log("Error playing audio:", error));
      setIsPlayingMusic(true);
    }
  };

  const toggleMusic = () => {
    if (isPlayingMusic) {
      audioRef.current?.pause();
    } else {
      startMusic();
    }
    setIsPlayingMusic(!isPlayingMusic);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio(audioFile);
      audioRef.current.volume = 0.4;
      audioRef.current.loop = true;

      // Attempt to autoplay on page load after a brief delay
      setTimeout(() => {
        startMusic();
      }, 1000); // Slight delay to allow other components to load

      // Ensure that user interaction can start music
      document.addEventListener("click", startMusic, { once: true });
    }

    return () => {
      audioRef.current?.pause();
      audioRef.current = null; // Clean up the audio reference
    };
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div
        onClick={toggleMusic}
        className="fixed cursor-pointer z-40 top-12 right-10"
      >
        {isPlayingMusic ? <Music /> : <MusicOff />}
      </div>
      <Component {...pageProps} />
      <ToastContainer />
    </Fragment>
  );
};

export default App;
