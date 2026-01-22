import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
  onUnveil?: () => void; // optional: start music here if you want
};

export default function AnniversaryIntro({ onUnveil }: Props) {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [phase, setPhase] = useState<"idle" | "countdown" | "done">("idle");
  const [count, setCount] = useState(3);

  const storageKey = useMemo(() => "anniv_unveiled_v1", []);

  useEffect(() => {
    setMounted(true);
    // Show overlay only if not unveiled before
    try {
      const already = localStorage.getItem(storageKey);
      setShow(!already);
    } catch {
      setShow(true);
    }
  }, [storageKey]);

  useEffect(() => {
    if (phase !== "countdown") return;

    setCount(3);
    const t1 = setTimeout(() => setCount(2), 1000);
    const t2 = setTimeout(() => setCount(1), 2000);
    const t3 = setTimeout(() => setCount(0), 3000);
    const t4 = setTimeout(() => setPhase("done"), 3350);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [phase]);

  const unveil = () => {
    // optional hook (start music, etc)
    try {
      onUnveil?.();
    } catch {}

    setPhase("countdown");
  };

  const finish = () => {
    try {
      localStorage.setItem(storageKey, "1");
    } catch {}
    setShow(false);
  };

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999999,
            display: "grid",
            placeItems: "center",
            padding: 20,
            background:
              "radial-gradient(circle at top, rgba(255,228,236,0.95) 0%, rgba(255,241,245,0.98) 55%, rgba(255,214,227,0.96) 100%)",
            backdropFilter: "blur(10px)",
          }}
        >
          {/* Soft floating glow blobs (premium, not cringe) */}
          <motion.div
            aria-hidden
            animate={{ x: [0, 18, -10, 0], y: [0, -14, 10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: 220,
              height: 220,
              borderRadius: 999,
              background: "rgba(225,29,72,.14)",
              filter: "blur(40px)",
              left: "12%",
              top: "12%",
            }}
          />
          <motion.div
            aria-hidden
            animate={{ x: [0, -16, 12, 0], y: [0, 12, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: 260,
              height: 260,
              borderRadius: 999,
              background: "rgba(244,114,182,.16)",
              filter: "blur(46px)",
              right: "10%",
              bottom: "12%",
            }}
          />

          <motion.div
            initial={{ y: 18, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 10, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              width: "min(520px, 100%)",
              borderRadius: 28,
              border: "1px solid rgba(225,29,72,.18)",
              background: "rgba(255,247,250,.85)",
              boxShadow: "0 34px 120px rgba(225,29,72,.18)",
              padding: 28,
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <motion.div
              aria-hidden
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                fontSize: 54,
                color: "#e11d48",
                marginBottom: 10,
              }}
            >
              ♡
            </motion.div>

            <div
              style={{
                color: "#e11d48",
                fontWeight: 900,
                fontSize: "clamp(22px, 4.4vw, 28px)",
                letterSpacing: "-0.02em",
                marginBottom: 10,
              }}
            >
              today is our first anniversary baby
            </div>

            <div style={{ opacity: 0.75, lineHeight: 1.7, marginBottom: 22 }}>
              23.01.2025 → 23.01.2026
            </div>

            {phase === "idle" && (
              <button
                onClick={unveil}
                style={{
                  padding: "14px 28px",
                  borderRadius: 999,
                  border: "1px solid rgba(225,29,72,.35)",
                  background: "white",
                  color: "#e11d48",
                  fontWeight: 800,
                  cursor: "pointer",
                  boxShadow: "0 18px 44px rgba(225,29,72,.18)",
                }}
              >
                Unveil the website
              </button>
            )}

            {phase === "countdown" && (
              <motion.div
                key={count}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{
                  marginTop: 4,
                  fontSize: 64,
                  fontWeight: 900,
                  color: "#e11d48",
                  letterSpacing: "-0.04em",
                }}
              >
                {count === 0 ? "♡" : count}
              </motion.div>
            )}

            {phase === "done" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{ marginTop: 8 }}
              >
                <div style={{ opacity: 0.8, marginBottom: 10 }}>okay baby…</div>
                <button
                  onClick={finish}
                  style={{
                    padding: "12px 22px",
                    borderRadius: 999,
                    border: "1px solid rgba(225,29,72,.25)",
                    background: "white",
                    color: "#e11d48",
                    fontWeight: 800,
                    cursor: "pointer",
                  }}
                >
                  Enter ♡
                </button>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
