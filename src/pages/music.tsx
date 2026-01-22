import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAudio, toggleAudio } from "@/lib/globalAudio";

export default function Music() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = getAudio();

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);

    // initial
    setPlaying(!a.paused);

    a.addEventListener("play", onPlay);
    a.addEventListener("pause", onPause);

    return () => {
      a.removeEventListener("play", onPlay);
      a.removeEventListener("pause", onPause);
    };
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #fff1f5 0%, #ffe4ec 100%)",
        fontFamily: "sans-serif",
        display: "grid",
        placeItems: "center",
        padding: "60px 20px",
      }}
    >
      <Link
        href="/"
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          color: "#e11d48",
          opacity: 0.85,
        }}
      >
        ← Back
      </Link>

      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          width: "min(440px, 100%)",
          background: "#fff7fa",
          borderRadius: 28,
          padding: "38px 30px",
          border: "1px solid rgba(225,29,72,.18)",
          boxShadow: "0 30px 80px rgba(225,29,72,.14)",
          textAlign: "center",
        }}
      >
        <motion.div
          animate={playing ? { scale: [1, 1.06, 1] } : { scale: 1 }}
          transition={playing ? { duration: 1.1, repeat: Infinity, ease: "easeInOut" } : {}}
          style={{ fontSize: 56, color: "#e11d48", marginBottom: 14 }}
        >
          ♡
        </motion.div>

        <div style={{ fontSize: 18, fontWeight: 900, color: "#e11d48" }}>
          Our song
        </div>

        <div style={{ marginTop: 8, opacity: 0.7 }}>
          {playing ? "Playing" : "Paused"}
        </div>

        <div style={{ marginTop: 22 }}>
          <button
            onClick={() => toggleAudio()}
            style={{
              width: 86,
              height: 86,
              borderRadius: "50%",
              border: "1px solid rgba(225,29,72,.35)",
              background: "white",
              cursor: "pointer",
              fontSize: 26,
              color: "#e11d48",
              boxShadow: "0 18px 44px rgba(225,29,72,.22)",
            }}
          >
            {playing ? "❚❚" : "▶"}
          </button>
        </div>
      </motion.div>
    </main>
  );
}
