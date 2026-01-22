import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAudio, toggleAudio } from "@/lib/globalAudio";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = getAudio();

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    // initial state
    setPlaying(!a.paused);

    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);

    return () => {
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
    };
  }, []);

  return (
    <motion.button
      onClick={() => toggleAudio()}
      whileTap={{ scale: 0.92 }}
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        width: 64,
        height: 64,
        borderRadius: "50%",
        border: "1px solid rgba(225,29,72,.35)",
        background: "white",
        color: "#e11d48",
        fontSize: 22,
        cursor: "pointer",
        boxShadow: "0 20px 40px rgba(225,29,72,.25)",
        zIndex: 999999,
      }}
      aria-label="Toggle music"
      title="Music"
    >
      {playing ? "❚❚" : "▶"}
    </motion.button>
  );
}
