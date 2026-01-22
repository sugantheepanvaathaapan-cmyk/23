import Link from "next/link";
import { motion } from "framer-motion";

export default function TwentyThree() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #ffe4ec 0%, #fff1f5 40%, #ffe4ec 100%)",
        fontFamily: "sans-serif",
        color: "#1f2937",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "64px 20px 100px" }}>
        <Link href="/" style={{ color: "#e11d48", opacity: 0.85 }}>
          ← Back
        </Link>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ textAlign: "center", marginTop: 40, marginBottom: 40 }}
        >
          <div
            style={{
              fontSize: "clamp(120px, 30vw, 240px)",
              fontWeight: 900,
              letterSpacing: "-0.08em",
              color: "#e11d48",
              lineHeight: 0.9,
            }}
          >
            23
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            background: "#fff7fa",
            borderRadius: 26,
            border: "1px solid rgba(225,29,72,.18)",
            boxShadow: "0 30px 80px rgba(225,29,72,.14)",
            padding: 26,
            whiteSpace: "pre-wrap",
            lineHeight: 1.9,
            fontSize: 16,
          }}
        >
          {`23 doesn’t feel like a date anymore.
 It feels like a reminder that some things stay when you take care of them.
It’s not about how long it’s been.
 It’s about how it still feels. You never stopped loving me but instead you love me more everyday.
I would never forget how this started, I know I’ll remember how it felt on the 23rd of January bebe.`}
        </motion.div>
      </div>
    </main>
  );
}
