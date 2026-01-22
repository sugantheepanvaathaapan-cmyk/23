import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loveCards } from "@/data/loveCards";

export default function Love() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #fff1f5 0%, #ffe4ec 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: 960, margin: "0 auto", padding: "56px 20px 80px" }}>
        <Link href="/" style={{ color: "#e11d48", opacity: 0.85 }}>
          ← Back
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            margin: "18px 0 10px",
            color: "#e11d48",
            letterSpacing: "-0.03em",
            fontSize: "clamp(34px, 6vw, 54px)",
          }}
        >
          Things I Love About You
        </motion.h1>

        <p style={{ margin: 0, opacity: 0.75 }}>
          Tap each card. This page is made for long writing.
        </p>

        <div style={{ height: 22 }} />

        <div style={{ display: "grid", gap: 14 }}>
          {loveCards.map((c, i) => {
            const opened = openIndex === i;

            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut", delay: i * 0.04 }}
                style={{
                  background: "#fff7fa",
                  border: "1px solid rgba(225,29,72,.18)",
                  borderRadius: 22,
                  boxShadow: "0 22px 60px rgba(225,29,72,.12)",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setOpenIndex(opened ? null : i)}
                  style={{
                    width: "100%",
                    padding: "18px 18px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "left",
                  }}
                >
                  <div style={{ fontWeight: 850, color: "#e11d48", fontSize: 16 }}>
                    {c.title}
                  </div>

                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      border: "1px solid rgba(225,29,72,.28)",
                      display: "grid",
                      placeItems: "center",
                      background: "white",
                      color: "#e11d48",
                      fontWeight: 900,
                    }}
                  >
                    {opened ? "–" : "+"}
                  </div>
                </button>

                <AnimatePresence>
                  {opened ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <div
                        style={{
                          padding: "0 18px 18px",
                          whiteSpace: "pre-wrap",
                          lineHeight: 1.9,
                          fontSize: 16,
                          opacity: 0.9,
                        }}
                      >
                        {c.text}
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Creative touch: a tiny “23” note */}
        <div style={{ marginTop: 26, opacity: 0.6, fontSize: 13, textAlign: "center" }}>
          23 isn’t just a date. It’s a feeling we named together.
        </div>
      </div>
    </main>
  );
}
