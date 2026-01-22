import Link from "next/link";
import { motion } from "framer-motion";
import { useMusic } from "@/context/MusicContext";

export default function FloatingMusicButton() {
  const { playing, toggle } = useMusic();

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        position: "fixed",
        right: 16,
        bottom: 16,
        zIndex: 9999,
        display: "flex",
        gap: 10,
        alignItems: "center",
      }}
    >
      {/* Optional: quick link to /music page */}
      <Link
        href="/music"
        style={{
          padding: "10px 12px",
          borderRadius: 999,
          border: "1px solid rgba(225,29,72,.25)",
          background: "rgba(255,255,255,.75)",
          backdropFilter: "blur(8px)",
          color: "#e11d48",
          fontWeight: 700,
          fontSize: 14,
          textDecoration: "none",
          boxShadow: "0 16px 40px rgba(225,29,72,.12)",
        }}
      >
        Music
      </Link>

      {/* Floating play/pause */}
      <button
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        style={{
          width: 58,
          height: 58,
          borderRadius: "50%",
          border: "1px solid rgba(225,29,72,.35)",
          background: "rgba(255,255,255,.85)",
          backdropFilter: "blur(10px)",
          cursor: "pointer",
          fontSize: 20,
          color: "#e11d48",
          boxShadow: playing
            ? "0 0 0 10px rgba(225,29,72,.16), 0 18px 44px rgba(225,29,72,.18)"
            : "0 18px 44px rgba(225,29,72,.18)",
          transition: "all .2s ease",
        }}
      >
        {playing ? "❚❚" : "▶"}
      </button>
    </motion.div>
  );
}
