import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Modal({
  open,
  title,
  children,
  onClose,
}: {
  open: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          key="backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,.45)",
            display: "grid",
            placeItems: "center",
            padding: 18,
            zIndex: 9999,
          }}
        >
          <motion.div
            key="panel"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            style={{
              width: "min(860px, 100%)",
              maxHeight: "85vh",
              overflow: "auto",
              background: "#fff7fa",
              borderRadius: 22,
              border: "1px solid rgba(225,29,72,.18)",
              boxShadow: "0 30px 90px rgba(0,0,0,.25)",
            }}
          >
            <div
              style={{
                padding: 16,
                borderBottom: "1px solid rgba(0,0,0,.10)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                position: "sticky",
                top: 0,
                background: "#fff7fa",
                zIndex: 2,
              }}
            >
              <div style={{ fontWeight: 800, color: "#e11d48" }}>{title}</div>

              <button
                onClick={onClose}
                style={{
                  border: "1px solid rgba(225,29,72,.25)",
                  background: "white",
                  color: "#e11d48",
                  borderRadius: 999,
                  padding: "8px 12px",
                  cursor: "pointer",
                  fontWeight: 650,
                }}
              >
                Close
              </button>
            </div>

            <div style={{ padding: 16 }}>{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
