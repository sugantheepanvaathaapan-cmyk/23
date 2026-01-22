import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import Modal from "@/components/Modal";
import { memories } from "@/data/memories";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const active = activeIndex !== null ? memories[activeIndex] : null;

  const goPrev = () => {
    setActiveIndex((i) => (i === null ? 0 : Math.max(0, i - 1)));
  };

  const goNext = () => {
    setActiveIndex((i) =>
      i === null ? 0 : Math.min(memories.length - 1, i + 1)
    );
  };

  // keyboard
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  // swipe
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null || startY.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    const dy = e.changedTouches[0].clientY - startY.current;
    startX.current = null;
    startY.current = null;

    if (Math.abs(dx) < 45) return;
    if (Math.abs(dx) < Math.abs(dy)) return;

    if (dx < 0 && activeIndex !== null && activeIndex < memories.length - 1)
      goNext();
    if (dx > 0 && activeIndex !== null && activeIndex > 0) goPrev();
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #fff1f5 0%, #ffe4ec 100%)",
        fontFamily: "sans-serif",
      }}
    >
      {/* HEADER */}
      <section style={{ padding: "36px 20px 28px", textAlign: "center" }}>
        <FadeIn>
          <h1
            style={{
              margin: 0,
              fontSize: "clamp(32px, 6vw, 52px)",
              letterSpacing: "-0.03em",
              color: "#e11d48",
            }}
          >
            A Year of Us
          </h1>
          <p style={{ marginTop: 10, opacity: 0.75 }}>
            23.01.2025 → 23.01.2026
          </p>
        </FadeIn>

        {/* MAIN NAV BUTTONS */}
        <FadeIn delay={0.12}>
          <div style={{ marginTop: 22 }}>
            <Link href="/letter"><button className="btn">Read my letter</button></Link>
            <Link href="/love"><button className="btn">Things I love about you</button></Link>
            <Link href="/23"><button className="btn">Why 23</button></Link>
          </div>
        </FadeIn>

        {/* MUSIC BUTTON (THIS WAS MISSING) */}
        <FadeIn delay={0.22}>
          <div style={{ marginTop: 18 }}>
            <Link href="/music">
              <button className="btn music-btn">
                ▶ Play our song
              </button>
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* GALLERY */}
      <section style={{ padding: "12px 16px 64px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 22 }}>
          {memories.map((m, i) => (
            <FadeIn key={m.src}>
              <button
                onClick={() => {
                  setActiveIndex(i);
                  setOpen(true);
                }}
                style={{ all: "unset", cursor: "pointer" }}
              >
                <div
                  style={{
                    borderRadius: 22,
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(225,29,72,.12)",
                    border: "1px solid rgba(225,29,72,.15)",
                  }}
                >
                  <img
                    src={m.src}
                    alt={m.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      aspectRatio: "3 / 4",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* MODAL */}
      <Modal
        open={open}
        title={
          active && activeIndex !== null
            ? `${active.title} (${activeIndex + 1}/${memories.length})`
            : ""
        }
        onClose={() => {
          setOpen(false);
          setActiveIndex(null);
        }}
      >
        {active && (
          <div style={{ display: "grid", gap: 18 }}>
            <div
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              style={{
                aspectRatio: "3 / 4",
                overflow: "hidden",
                borderRadius: 16,
              }}
            >
              <img
                src={active.src}
                alt={active.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div style={{ whiteSpace: "pre-wrap", lineHeight: 1.9 }}>
              {active.text}
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <button onClick={goPrev} disabled={activeIndex === 0}>
                Previous
              </button>
              <button
                onClick={goNext}
                disabled={activeIndex === memories.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* FINAL SCENE */}
      <section
        style={{
          padding: "120px 20px 140px",
          textAlign: "center",
          background:
            "linear-gradient(180deg, rgba(255,241,245,0) 0%, #ffe4ec 40%, #ffd6e3 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 style={{ color: "#e11d48" }}>One year finished chellam.</h2>
          <p>
            Thank you for the patience. For the softness. For the way you stayed
            even when things weren’t perfect.
          </p>
          <p>This website isn’t a summary. It’s a pause. A moment to say</p>
          <div style={{ fontWeight: 800, color: "#e11d48" }}>
            I’d choose you again.
          </div>
          <div>And again. And again. Forever.</div>
        </motion.div>
      </section>

      <style jsx>{`
        .btn {
          padding: 14px 30px;
          border-radius: 999px;
          border: 1px solid rgba(225,29,72,.35);
          background: white;
          cursor: pointer;
          font-size: 16px;
          color: #e11d48;
          font-weight: 700;
          margin: 6px;
        }
        .music-btn {
          background: #fff0f5;
          box-shadow: 0 12px 30px rgba(225,29,72,.25);
        }
        @media (min-width: 700px) {
          section div[style*="grid-template-columns"] {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          section div[style*="grid-template-columns"] {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </main>
  );
}
