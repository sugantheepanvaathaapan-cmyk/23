import Link from "next/link";
import { motion } from "framer-motion";

export default function Letter() {
  const paragraphs = [
    `I don’t think I would’ve ever expected love to feel this calm but I'm glad I got to experience it through your love. People say love is hard or dramatic but with you it’s been the total opposite of what other people see love as. Our 1 strong year relationship proved to me that love is not destructible, love isn’t about lust, love isn’t just for fun. Whether you had a good day or bad day you never miss to treat me the same and keep me the happiest boy alive in this universe. One thing I would be proud to say is that you made me love myself more after you came into my life as my partner, not just a partner, a partner who is lovely, a partner who would be together forever with me, a partner who I want to lead a happy life with and make family together, a partner who loves me unconditionally.`,
    `A year ago, 23.01.2025 I was scared and shy and you somehow created confidence inside me and made me ask you out and I did, and you said yes. I had different views when I saw other people in a relationship, but you loved me and showed me a whole different world. When we went from best friends to lovers I was scared but with you change felt safe. Every minute, every second I have some type of contact with you, either snaps, or insta texts, or calls makes me feel like I am protected by a big force of love and every second I don’t have contact with you, when you sleep, when you are busy or when you are around your parents, it feels like my breath is stopped.`,
    `I love how we grew into each other. How it wasn’t rushed. How it wasn’t forced. How it just happened. And somehow is the strongest to exist in this world.`,
    `You’ve taught me patience without even trying. You’ve taught me how to listen, how to care deeper, how to show up even when it’s uncomfortable. You simply made me experience what true love is. And I don’t say that lightly because not everyone changes you in a good way. You did.`,
    `I know I am not a perfect man and I may not be a perfect man for you. But I really promise effort. I promise honesty. I promise you a ring, a wedding, a happy family with kids. I promise you loyalty. I promise when things get heavy I would always be with you every second and I would never even stay a minute apart from you. I really hope we never get separated again I love you so much that it hurts to even think about us getting separated again. I know its just me overthinking, but you are so precious that it hurts me to even think. I don’t know what I did to deserve you but you are here and I am very grateful to have you as mine. Please keep me as yours forever.`,
    `This website I made for you is not to just do it for the sake but to show you that I would always be with you and put efforts on you, and this is just 1% of what I want to do with you. I wish I lived near you so I could have given you a special day today but I am sorry that I’m not there but I promise next year our second anniversary I will be next to you holding your hands and trying my best to make you feel loved. This site isn’t here to prove anything. It’s just a pause. A moment to say I’m grateful for you. For this year. And for the ones we haven’t lived yet and I really want many many many endless years with you.`,
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #fff1f5 0%, #ffe4ec 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: 820, margin: "0 auto", padding: "56px 20px 80px" }}>
        <Link href="/" style={{ color: "#e11d48", opacity: 0.85 }}>
          ← Back
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          style={{
            margin: "18px 0 8px",
            fontSize: "clamp(34px, 6vw, 56px)",
            letterSpacing: "-0.03em",
            color: "#e11d48",
          }}
        >
          To You
        </motion.h1>

        <div style={{ height: 24 }} />

        <div style={{ display: "grid", gap: 18 }}>
          {paragraphs.map((text, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                margin: 0,
                lineHeight: 1.9,
                fontSize: 17,
                background: "#fff7fa",
                border: "1px solid rgba(225,29,72,.15)",
                borderRadius: 20,
                padding: 20,
                boxShadow: "0 18px 40px rgba(225,29,72,.08)",
                whiteSpace: "pre-wrap",
              }}
            >
              {text}
            </motion.p>
          ))}
        </div>
      </div>
    </main>
  );
}
